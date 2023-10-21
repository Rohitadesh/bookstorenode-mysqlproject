
let qu = {
    "store_data" : "INSERT INTO all_books (book_title,book_author,book_published) VALUES ?",
    "get_data" : "SELECT * FROM all_books ",
    "specifc_data":"SELECT * FROM all_books where book_id = ?",
    "delete_data":"DELETE  FROM all_books where book_id = ?"
}

module.exports=qu;