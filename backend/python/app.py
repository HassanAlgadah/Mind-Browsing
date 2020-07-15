from flask import Flask, render_template, request, jsonify, url_for, redirect

app = Flask(__name__)


@app.route('/tab')
def press_tab():
    return "ok"


@app.route('/enter')
def press_enter():
    return "ok"


@app.route('/back_page')
def back_page():
    return "ok"


@app.route('/refresh')
def press_refresh():
    return "ok"


@app.route('/page_down')
def press_page_down():
    return "ok"


if __name__ == '__main__':
    app.run()
