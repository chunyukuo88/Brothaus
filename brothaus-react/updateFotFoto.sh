aws s3 rm s3://woobler-photos --recursive && aws s3 sync "C:\Users\alexg\OneDrive\Desktop\woobler" s3://woobler-photos --acl public-read