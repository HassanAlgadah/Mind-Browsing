from flask import Flask, render_template, request, jsonify, url_for, redirect
import keyboard
from flask_cors import CORS
from models import setup_db, User

app = Flask(__name__)
setup_db(app)
CORS(app)


@app.route('/tab')
def press_tab():
    keyboard.press('tab')
    return "ok"


@app.route('/enter')
def press_enter():
    keyboard.press('enter')
    return "ok"


@app.route('/back_page')
def back_page():
    # keyboard.press_and_release('Alt + left arrow')
    # For mac
    keyboard.press_and_release('cmd + left arrow')
    return "ok"


@app.route('/refresh')
def press_refresh():
    # keyboard.press_and_release('Ctrl + r')
    # For mac
    keyboard.press_and_release('cmd + r')
    return "ok"


@app.route('/page_down')
def press_page_down():
    keyboard.press('page down')
    return "ok"


@app.route('/fac', methods=['GET', 'PUT'])
def change_facial():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    for user in User.query.all():
        if email == user.email and password == user.password:
            if request.method == 'PUT':
                user.tab = data.get('tab')
                user.refresh = data.get('refresh')
                user.down = data.get('down')
                user.enter = data.get('enter')
                user.back = data.get('back')
                user.update()

            return jsonify({
                'tab': user.tab,
                'refresh': user.refresh,
                'down': user.down,
                'enter': user.enter,
                'back': user.back
            })
    return jsonify({
        'error': 'no match'
    })


@app.route('/users', methods=['POST'])
def sign_up():
    data = request.form
    user = User(email=data.get('email'),
                password=data.get('password'))
    user.insert()


@app.route('/sign_in', methods=['POST'])
def sign_in():
    data = request.form
    for user in User.query.all():
        if data.get('email') == user.email and data.get('password') == user.password:
            return jsonify({
                'status': '200'
            })
    return jsonify({
        'status': '400'
    })


if __name__ == '__main__':
    app.run()
