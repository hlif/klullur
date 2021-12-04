from flask import Flask
from .endpoints.health import HealthCheck

app = Flask(__name__)
app.add_url_rule("/health_check", view_func=HealthCheck.as_view(name="health_check"))
