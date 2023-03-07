from flask import Flask, render_template

app = Flask (__name__)

@app.route("/churrascaria")
def churrascaria():
    return render_template("index.html")

@app.route("/reservas")
def reservas():
    return render_template("reservas.html")

@app.route("/pedidos")
def pedidos():
    return render_template("pedidos.html")

@app.rout("/cardapio")
def pedidos():
    return render_template("cardapio.html")


if __name__ == "__main__":
    app.run(host = '0.0.0.0', debug = True)

