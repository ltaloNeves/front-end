from flask import Flask, render_template, jsonify, request

app = Flask (__name__)


comentarios = [
    {
        'lorem'

    },

]

@app.route('/comentarios')
def comentarios():
    return jsonify (comentarios)


if __name__ == "__main__":
    app.run(host = '0.0.0.0', debug = True)