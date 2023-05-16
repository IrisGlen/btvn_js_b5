// bai 1: Quản lý tuyển sinh
// input : người dùng nhập điểm môn 1, 2, 3
//  người dùng nhập tiếp Điểm chuẩn để so sánh
// người dùng nhập khu vực, đối tượng để tính điểm ưu tiên

// xử lý: 
// B1: tính tổng điểm ưu tiên
// B2: tính tổng điểm tổng kết
// B3: kiểm tra đậu hay rớt: điều kiện đậu là điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0

// output: xuất kết quả đậu rớt và điểm đạt được

function tinhDiemTuyenSinh() {
    //lấy dữ liệu từ người dùng
    var diemChuan = document.getElementById("chonDiemChuan").value * 1;
    var khuVuc = document.getElementById("chonKhuVuc").value * 1;
    var doiTuong = document.getElementById("chonDoiTuong").value * 1;
    var mon1 = document.getElementById("mon1").value * 1;
    var mon2 = document.getElementById("mon2").value * 1;
    var mon3 = document.getElementById("mon3").value * 1;

    //xử lý
    var tongDiemTuyenSinh = 0;
    var tongDiemUuTien = khuVuc + doiTuong;
    console.log(khuVuc);
    console.log(doiTuong);
    var ketQua = "";
    tongDiemTuyenSinh = mon1 + mon2 + mon3 + tongDiemUuTien;
    console.log(tongDiemUuTien);
    console.log(tongDiemTuyenSinh);
    if (tongDiemTuyenSinh >= diemChuan) {
        ketQua = "đậu";
    } else {
        ketQua = "rớt"
    }
    //xuất ra màn hình
    document.querySelector(".diemTuyenSinh").innerHTML = "Tổng điểm đạt được: " + tongDiemTuyenSinh + " và kết quả là: " + ketQua;
}

// bai 2: Tính tiền điện
// input : người dùng nhập họ tên và số KW 

// xử lý: 
// B1: 50k dau => gia 500
// B2: 50 ke => gia 650
// B3: 100 ke => gia 850
// B4 150 ke => gia 110
//  con lai 1300

// output: xuất kết quả 
function tinhTienDien() {
    //lấy dữ liệu từ người dùng
    var hoTen = document.getElementById("hoTen").value;
    var soDien = document.getElementById("soDien").value * 1;
    
    //xử lý
    const giaKm50Dau = 500;
    const giaKm50Den100 = 650;
    const giaKm100Den200 = 850;
    const giaKm200Den350 = 1100;
    const giaKmTren350 = 1300;

    var ketQua = 0;

    if (soDien >= 1) {
        // alert("chưa đi mà đòi trả tiền @@");
        if (soDien <= 50) {
            ketQua = giaKm50Dau * soDien;
        } else if (soDien > 50 && soDien <= 100) {
            ketQua = giaKm50Dau * 50 + (soDien - 50) * giaKm50Den100;
        } else if (soDien > 100 && soDien <= 200) {
            ketQua = giaKm50Dau * 50 + giaKm50Den100 * 50 + (soDien - 100) * giaKm100Den200;
        }
        else if (soDien > 200 && soDien <= 350) {
            ketQua = giaKm50Dau * 50 + giaKm50Den100 * 50 + giaKm100Den200 * 100 + (soDien - 200) * giaKm200Den350;
        }
        else {
            ketQua = giaKm50Dau * 50 + giaKm50Den100 * 50 + giaKm100Den200 * 100 + giaKm200Den350 * 150 + (soDien - 350) * giaKmTren350;
        }
    } else {
        alert("nhap vao day du nhe");
    }
    //xuất ra màn hình
    document.querySelector(".tienDien").innerHTML = hoTen + " đã tiêu thụ số tiền điện trong tháng (đồng) là: " + ketQua;
}

// Bài 3: Tính thuế thu nhập cá nhân
// input : người dùng nhập họ tên, tong thu nhap, người phụ thuộc

// xử lý: 
// B1: xác định Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
// B2: tính số tiền thuế
//  if thu nhap den 60tr => thue 5%
// else thu nhap tren 60tr den 120 => thue 10%
// else thu nhap tren 120tr den 210 => thue 15%
// else thu nhap tren 210tr den 384 => thue 20%
// else thu nhap tren 384tr den 624 => thue 25%
// else thu nhap tren 624 den 960 => thue 30%
// else thu nhap tren 960 => thue 35%

// output: xuất kết quả 
function tinhTienThue() {
    //lấy dữ liệu từ người dùng
    var hoTenNguoiNopThue = document.getElementById("hoTenNguoiNopThue").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    //xử lý
    const thuNhapDen60 = 5;
    const thuNhapTren60Den120 = 10;
    const thuNhapTren120Den210 = 15;
    const thuNhapTren210Den384 = 20;
    const thuNhapTren384Den624 = 25;
    const thuNhapTren624Den960 = 30;
    const thuNhapTren960 = 35;

    var ketQua = 0;
    var tongThuNhapChiuThue = 0;
    tongThuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    if (tongThuNhap >= 0) {
        // xử lý
        if (tongThuNhapChiuThue <= 60000000) {
            ketQua = (tongThuNhapChiuThue * thuNhapDen60)/100;
        } else if (tongThuNhapChiuThue > 60000000 && tongThuNhapChiuThue <= 120000000) {
            ketQua = (thuNhapDen60 * 60000000)/100 + ((tongThuNhapChiuThue - 60000000) * thuNhapTren60Den120)/100;
        } else if (tongThuNhapChiuThue > 120000000 && tongThuNhapChiuThue <= 210000000) {
            ketQua = (thuNhapDen60 * 60000000)/100 + (thuNhapTren60Den120 * 60000000)/100 + ((tongThuNhapChiuThue - 120000000) * thuNhapTren120Den210)/100;
        }
        else if (tongThuNhapChiuThue > 210000000 && tongThuNhapChiuThue <= 384000000) {
            ketQua = (thuNhapDen60 * 60000000)/100 + (thuNhapTren60Den120 * 60000000)/100 + 
            (thuNhapTren120Den210 * 90000000)/100 + ((tongThuNhapChiuThue - 210000000) * thuNhapTren210Den384)/100;
        } 
        else if (tongThuNhapChiuThue > 384000000 && tongThuNhapChiuThue <= 624000000) {
            ketQua = (thuNhapDen60 * 60000000)/100 + (thuNhapTren60Den120 * 60000000)/100 + 
            (thuNhapTren120Den210 * 90000000)/100 + 
            (thuNhapTren210Den384 * 174000000)/100 + ((tongThuNhapChiuThue - 384000000) * thuNhapTren384Den624)/100;
        }
        else if (tongThuNhapChiuThue > 624000000 && tongThuNhapChiuThue <= 960000000) {
            ketQua = (thuNhapDen60 * 60000000)/100 + (thuNhapTren60Den120 * 60000000)/100 + 
            (thuNhapTren120Den210 * 90000000)/100 + 
            (thuNhapTren210Den384 * 174000000)/100 + 
            (thuNhapTren384Den624 * 240000000)/100 + ((tongThuNhapChiuThue - 624000000) * thuNhapTren624Den960)/100;
        }
        else {
            ketQua = (thuNhapDen60 * 60000000)/100 + (thuNhapTren60Den120 * 60000000)/100 + 
            (thuNhapTren120Den210 * 90000000)/100 + 
            (thuNhapTren210Den384 * 174000000)/100 + 
            (thuNhapTren384Den624 * 240000000)/100 + 
            (thuNhapTren624Den960 * 336000000)/100 + ((tongThuNhapChiuThue - 624000000) * thuNhapTren960)/100;
        }
    } else {
        alert("nhap vao day du nhe");
    }
    //xuất ra màn hình
    document.querySelector(".hienThiTienThue").innerHTML = hoTenNguoiNopThue + " phải chịu số thuế TNCN là: " + ketQua;
}

function HideShowConnectCell() {
    var loaiHinhDN = document.getElementById("loaiHinhDN").value;
    var x = document.getElementById("soKetNoiGroup");
    if (loaiHinhDN === "doanhNghiep") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// bai 4: Tính tiền cáp
// input : người dùng nhập họ tên và số KW 

// xử lý: 
// B1: sswitch case
// B2 tinh tiền

// output: xuất kết quả 
const NGUOI_DAN = "nguoiDan";
const DOANH_NGHIEP = "doanhNghiep";

function phiXuatHoaDon(loaiHinhDN) {
    switch (loaiHinhDN) {
        case NGUOI_DAN: {
            return 4.5;
        }
        case DOANH_NGHIEP: {
            return 15;
        }
    }
}
function phiDichVuCoBan(loaiHinhDN) {
    switch (loaiHinhDN) {
        case NGUOI_DAN: {
            return 20.5;
        }
        case DOANH_NGHIEP: {
            return 75;
        }
    }
}
function phiThueKenhCaoCap(loaiHinhDN) {
    switch (loaiHinhDN) {
        case NGUOI_DAN: {
            return 7.5;
        }
        case DOANH_NGHIEP: {
            return 50;
        }
    }
}
function tinhTienCap() {
    //lấy dữ liệu từ người dùng
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var loaiHinhDN = document.getElementById("loaiHinhDN").value;
    //xử lý
    
    var ketQua = 0;
    var chiPhiXuatHoaDon = phiXuatHoaDon(loaiHinhDN);
    var chiPhiDichVuCoBan = 0;
    var chiPhiThueKenhCaoCap = phiThueKenhCaoCap(loaiHinhDN) * soKenhCaoCap;
    if (soKetNoi <= 10) {
        chiPhiDichVuCoBan = phiDichVuCoBan(loaiHinhDN);
    } else if (soKetNoi > 10) {
        chiPhiDichVuCoBan = phiDichVuCoBan(loaiHinhDN) * 10 + (soKetNoi - 10) * 5;
    }
    console.log(loaiHinhDN);
    console.log(chiPhiXuatHoaDon);
    console.log(chiPhiDichVuCoBan);
    console.log(chiPhiThueKenhCaoCap);
    ketQua = chiPhiXuatHoaDon + chiPhiDichVuCoBan + chiPhiThueKenhCaoCap;
    //xuất ra màn hình
    document.querySelector(".hienThiTienCap").innerHTML = maKhachHang + " đã tiêu thụ số tiền cáp (đơn vị : $) là: " + ketQua;
}