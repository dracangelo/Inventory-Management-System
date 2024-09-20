from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
from flask_cors import CORS

db = SQLAlchemy()
socketio = SocketIO(cors_allowed_origins="*")

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")

    # Initialize database and SocketIO
    db.init_app(app)
    socketio.init_app(app)
    
    # Register routes and socket handlers
    from .routes import main_routes
    from .sockets import init_socketio
    
    app.register_blueprint(main_routes)
    init_socketio(socketio)
    
    return app
