from flask import jsonify
from flask.views import MethodView


class Categories(MethodView):
    def get(self):
        return jsonify(["Súkkulaði", "Bleyjur", "Herbalife", "Haglabyssur"])
