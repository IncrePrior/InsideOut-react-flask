from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func
from datetime import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    photo_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('photos.id')), nullable=False)
    title = db.Column(db.String(180), nullable=False)
    text = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    user = db.relationship('User', back_populates='posts')
    photo = db.relationship('Photo', back_populates='posts')
    collections = db.relationship('Collection', secondary=add_prefix_for_prod('posts_collections'), back_populates='posts')
    posts_collections = db.relationship('PostCollection', back_populates='posts', cascade='all, delete-orphan')
    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'photoId': self.photo_id,
            'title': self.title,
            'text': self.text,
            'createdAt': self.created_at.strftime('%B %d, %Y'),
            'updatedAt': self.updated_at.strftime('%B %d, %Y'),
            'photoUrl': self.photo.photo_url,
            'User' : self.user.to_dict(),
            'comments': [comment.to_dict() for comment in self.comments],
            'commentCount' : len(self.comments),
        }
