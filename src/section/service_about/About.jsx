import "./about.css";

const About = () => {
  return <>
    <section id="about">
            <div class="container">
                <div class="about_heading">
                    <h2 class="heading">Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
                </div>
                <div class="about_wrapper">
                    <div class="about_item">
                        <div class="aboutItem_heading">
                            <h4 class="sub_heading">Pilih Properti</h4>
                            <span class="sub_heading">01</span>
                        </div>
                        <p class="paragraph">Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga.
                            Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                        <a href="#" class="sub_heading">Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="about_item">
                        <div class="aboutItem_heading">
                            <h4 class="sub_heading">Pilih Properti</h4>
                            <span class="sub_heading">01</span>
                        </div>
                        <p class="paragraph">Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit
                            properti tertentu.</p>
                        <a href="#" class="sub_heading">Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="about_item">
                        <div class="aboutItem_heading">
                            <h4 class="sub_heading">Pilih Properti</h4>
                            <span class="sub_heading">01</span>
                        </div>
                        <p class="paragraph">Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan
                            dan dilanjutkan proses sertifkasi HGB.</p>
                        <a href="#" class="sub_heading">Baca lebih Lanjut<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
  </>;
};

export default About;
