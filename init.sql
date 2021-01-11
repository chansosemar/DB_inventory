/* TABLE tbl_user */

CREATE TABLE tbl_user (
	id_user SERIAL PRIMARY KEY,
	nama_user VARCHAR(200) NOT NULL
);

/* TABLE tbl_kategori */
CREATE TABLE tbl_kategori (
	id_kategori SERIAL PRIMARY KEY,
	nama_kategori VARCHAR(200) NOT NULL
);

/* TABLE tbl_produk */
CREATE TABLE tbl_produk (
	id_produk SERIAL PRIMARY KEY,
	id_user INTEGER REFERENCES tbl_user (id_user),
	id_kategori INTEGER REFERENCES tbl_kategori (id_kategori),
	nama_produk VARCHAR(200) NOT NULL,
	kode_produk VARCHAR(50) NOT NULL,
	foto_produk VARCHAR(50) NOT NULL,
	tgl_register DATE NOT NULL
);

/* TABLE tbl_stok */
CREATE TABLE tbl_stok (
	id_stok SERIAL PRIMARY KEY,
	id_produk INTEGER REFERENCES tbl_produk (id_produk),
	jumlah_barang INTEGER NOT NULL,
	tgl_update DATE NOT NULL
);

INSERT INTO tbl_user (nama_user)
VALUES ('chansosemar');

INSERT INTO tbl_kategori (nama_kategori)
VALUES ('Motherboard');

-- INSERT INTO tbl_produk (nama_produk, kode_produk,foto_produk, tgl_register)
-- VALUES ('Motherboard H61 MLX3.0 Effoxpro', 'MBH611','https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-2882956/fast_fast-intel-h61---1155-with-hdmi-port-motherboard_full08.jpg', CURRENT_DATE);