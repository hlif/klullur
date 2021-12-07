from flask import Flask
from flask_cors import CORS
from endpoints.health import HealthCheck
from endpoints.categories import Categories

app = Flask(__name__)
CORS(app)

app.add_url_rule("/health_check", view_func=HealthCheck.as_view(name="health_check"))
app.add_url_rule("/api/v1/categories", view_func=Categories.as_view(name="categories"))
