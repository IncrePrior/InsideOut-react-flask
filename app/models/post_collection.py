from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class PostCollection(db.Model):
    __tablename__ = 'posts_collections'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')))
    collection_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('collections.id')), nullable=False)

    # posts = db.relationship('Post', back_populates='posts_collections')
    # collections = db.relationship('Collection', back_populates='posts_collections')

    posts = db.relationship('Post', back_populates='posts_collections', viewonly=True, overlaps="collections")
    collections = db.relationship('Collection', back_populates='posts_collections', viewonly=True, overlaps="posts")








# post_collections = db.Table(
#     'post_collections',

#     db.Column(
#     'collection_id',
#     db.Integer,
#     db.ForeignKey(add_prefix_for_prod('collections.id')),
#     primary_key=True
#     ),

#     db.Column(
#     'post_id',
#     db.Integer,
#     db.ForeignKey(add_prefix_for_prod('posts.id')),
#     primary_key=True
#     )
# )

# if environment == 'production':
#     post_collections.schema = SCHEMA
