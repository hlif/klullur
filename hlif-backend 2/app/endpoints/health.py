from flask import jsonify
from flask.views import MethodView


class HealthCheck(MethodView):
    def get(self):
        return jsonify({"status": "I'm alive!"})
