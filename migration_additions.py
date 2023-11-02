# #after imports
# import os
# environment = os.getenv("FLASK_ENV")
# SCHEMA = os.environ.get("SCHEMA")



# #between upgrade and downgrade
# # add to every migration:
#     if environment == "production":
#         op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    # if environment == "production":
    #     op.execute(f"ALTER TABLE albums SET SCHEMA {SCHEMA};")
    # if environment == "production":
    #     op.execute(f"ALTER TABLE playlists SET SCHEMA {SCHEMA};")
    # if environment == "production":
    #     op.execute(f"ALTER TABLE songs SET SCHEMA {SCHEMA};")
    # if environment == "production":
    #     op.execute(f"ALTER TABLE likes SET SCHEMA {SCHEMA};")
    # if environment == "production":
    #     op.execute(f"ALTER TABLE playlist_songs SET SCHEMA {SCHEMA};")
