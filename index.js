const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// USER
const getUser = (request, response) => {
	pool.query("SELECT * FROM tbl_user", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const addUser = (request, response) => {
	const { nama_user } = request.body;

	pool.query(
		"INSERT INTO tbl_user (nama_user) VALUES ($1)",
		[nama_user],
		(error) => {
			if (error) {
				throw error;
			}
			response
				.status(201)
				.json({ status: "success", message: "User Added" });
		}
	);
};

app.route("/user").get(getUser).post(addUser);

// KATEGORI
const getKategori = (request, response) => {
	pool.query("SELECT * FROM tbl_kategori", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const addKategori = (request, response) => {
	const { nama_kategori } = request.body;

	pool.query(
		"INSERT INTO tbl_kategori (nama_kategori) VALUES ($1)",
		[nama_kategori],
		(error) => {
			if (error) {
				throw error;
			}
			response.status(201).json({
				status: "success",
				message: "Kategori Added",
			});
		}
	);
};

app.route("/kategori").get(getKategori).post(addKategori);

// PRODUK
const getProduk = (request, response) => {
	pool.query("SELECT * FROM tbl_produk", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const addProduk = (request, response) => {
	const {
		nama_produk,
		kode_produk,
		foto_produk,
		tgl_register,
	} = request.body;

	pool.query(
		"INSERT INTO tbl_produk (nama_produk, kode_produk, foto_produk, tgl_register) VALUES ($1, $2, $3, CURRENT_DATE)",
		[nama_produk, kode_produk, foto_produk, tgl_register],
		(error) => {
			if (error) {
				throw error;
			}
			response.status(201).json({
				status: "success",
				message: "Produk Added",
			});
		}
	);
};

app.route("/produk").get(getProduk).post(addProduk);

// STOK
const getStok = (request, response) => {
	pool.query("SELECT * FROM tbl_stok", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const addStok = (request, response) => {
	const { jumlah_barang, tgl_update } = request.body;

	pool.query(
		"INSERT INTO tbl_stok (jumlah_barang, tgl_update) VALUES ($1, CURRENT_DATE)",
		[jumlah_barang, tgl_update],
		(error) => {
			if (error) {
				throw error;
			}
			response
				.status(201)
				.json({ status: "success", message: "Stok Added" });
		}
	);
};

app.route("/stok").get(getStok).post(addStok);
app.route("/").get((request, response) => {
	return response.status(200).send({
		message: "YAY! Congratulations! Your first endpoint is working",
	});
});

// START SERVER
app.listen(process.env.PORT || 3002, () => {
	console.log(`Server Listerning`);
});
