from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class CollectionForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    type = StringField('type', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
