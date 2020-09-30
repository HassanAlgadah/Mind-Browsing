from flask import Flask, render_template, request, jsonify, url_for, redirect
import keyboard
import time

app = Flask(__name__)


@app.route('/tab')
def press_tab():
    time.sleep(5)
    keyboard.press('tab')
    return "ok"


@app.route('/enter')
def press_enter():
    time.sleep(5)
    keyboard.press('enter')
    return "ok"


@app.route('/back_page')
def back_page():
    time.sleep(5)
    #keyboard.press_and_release('Alt + left arrow')
    #For mac
    keyboard.press_and_release('cmd + left arrow')
    return "ok"


@app.route('/refresh')
def press_refresh():
    time.sleep(5)
    #keyboard.press_and_release('Ctrl + r')
    #For mac
    keyboard.press_and_release('cmd + r')
    return "ok"


@app.route('/page_down')
def press_page_down():
    time.sleep(5)
    keyboard.press('page down')
    return "ok"


if __name__ == '__main__':
    app.run()
