from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.api.aws_helpers import upload_file_to_s3, remove_file_from_s3, get_unique_filename
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Post, Comment, Photo, User, Comment
# from app.forms import PostForm, UpdatePostForm, CommentForm


post_routes = Blueprint('posts', __name__)


@post_routes.route('', methods=['GET'])
def get_posts():
    """
    View all posts.
    """
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])

    # all_posts = Post.query.all()
    # all_posts_dict = {}

    # for post in all_posts:
    #     data = post.to_dict()
    #     all_posts_dict[str(post.id)] = data

    # return jsonify(all_posts_dict), 200





@post_routes.route('/<int:postId>', methods=["GET"])
def getOnePost(postId):
    """
    View one post by id.
    """
    post = Post.query.get(postId)
    # return post.to_dict()

    if not post:
        return {'errors' : {'Post' : 'Post not found'}}, 404

    post_dict = post.to_dict()
    return jsonify(post_dict), 200




# @post_routes.route('/new', methods=['POST'])
# @login_required
# def create_post():
#     """
#     Create a new post.
#     """

#     form = PostForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():

#         photo = form.data['photo']
#         photo.filename = get_unique_filename(photo.filename)
#         photo_upload = upload_file_to_s3(photo)
#         print(photo_upload)

#         if 'errors' in photo_upload:
#             return {'errors': photo_upload['errors']}, 400

#         photo_url = photo_upload['url']
#         new_photo = Photo(photo_url=photo_url)
#         db.session.add(new_photo)
#         db.session.commit()

#         new_post = Post(
#             user_id=current_user.id,
#             photo_id=new_photo.id,
#             title=form.data['title'],
#             text=form.data['text']
#         )

#         db.session.add(new_post)
#         db.session.commit()

#         return jsonify(new_post.to_dict()), 201

#     return {'errors': form.errors}, 400
