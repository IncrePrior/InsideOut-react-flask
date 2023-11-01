from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Photo(db.Model):
    __tablename__ = 'photos'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.String, nullable=False)

    posts = db.relationship("Post", back_populates="photo")

    def to_dict(self):
        return {
            'id': self.id,
            'photoUrl': self.photo_url,
        }
