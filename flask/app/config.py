import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://drac:1234@localhost/inventory_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False