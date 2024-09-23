from flask import Blueprint, jsonify, request
from app import db
from app.models.inventory import InventoryItem

bp = Blueprint('inventory', __name__, url_prefix='/api/inventory')

@bp.route('', methods=['GET'])
def get_inventory_items():
    items = InventoryItem.query.all()
    return jsonify([item.to_dict() for item in items])

@bp.route('', methods=['POST'])
def create_inventory_item():
    data = request.json
    new_item = InventoryItem(**data)
    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item.to_dict()), 201

@bp.route('/<int:id>', methods=['PUT'])
def update_inventory_item(id):
    item = InventoryItem.query.get_or_404(id)
    data = request.json
    for key, value in data.items():
        setattr(item, key, value)
    db.session.commit()
    return jsonify(item.to_dict())

@bp.route('/<int:id>', methods=['DELETE'])
def delete_inventory_item(id):
    item = InventoryItem.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return '', 204