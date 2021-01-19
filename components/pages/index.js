

export default function IndexLayout() {
  return (
    <>
      <main>
        <div className="myIndex">
          <a href="#men" className="myIndex_sub">
            <img src="/images/index_left_3.png" className="myIndex_sub_b_img" />
            <img src="/images/index_left_corner_btn.png" className="myIndex_sub_c_img myIndex_sub_c_img_left" />
          </a>
          <a href="#girl" className="myIndex_sub">
            <img src="/images/index_right_3.png" className="myIndex_sub_b_img" />
            <img src="/images/index_right_corner_btn.png" className="myIndex_sub_c_img" />
          </a>
        </div>
      </main>
    </>
  )
}
