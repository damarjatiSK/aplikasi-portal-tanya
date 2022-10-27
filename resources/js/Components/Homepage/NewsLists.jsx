const isNews = (news) => {
    return news.map((data, i) => {
        //konsepnya ini
        // <>
        // <div>{data.title}</div>
        // <div>{data.description}</div>
        // <div>{data.category}</div>
        // </>

        
        // return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        // <figure>
        //     {/* w-full lg:96 size lebih dari lg akan 96 selain itu akan full*/}
        //     <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        // </figure>
        // <div className="card-body">
        //     <h2 className="card-title">
        //     {data.title}
        //     <div className="badge badge-secondary">NEW</div>
        //     </h2>
        //     <p>{data.description}</p>
        //     <div className="card-actions justify-end">
        //         <div className="badge badge-inline">{data.category}</div>
        //         {/* jika tidak mau menampilkan email penulis  */}
        //         {/* <div className="badge badge-outline">{data.author}</div> */}
        //     </div>
        // </div> 
        // </div>
        

        return <div key={i} class="card w-96 bg-base-60 shadow-xl image-full">
        <figure><img src="https://unsoed.ac.id/sites/default/files/articles/Utama%201_1_7.jpg" alt="Batir Unsoed" /></figure>
        <div class="card-body ">
          <h2 class="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div class="card-actions justify-end">
          <div class="badge badge-accent badge-lg">{data.category}</div>
            {/* <button class="btn btn-primary">{data.category}</button> */}
          </div>
        </div>
      </div>

//     return <div class="card w-96 bg-base-100 shadow-xl">
//     <div class="card-body">
//       <h2 class="card-title">{data.title}</h2>
//       <p>{data.description}</p>
//       <div class="card-actions justify-end">
//         <button class="btn btn-primary">{data.category}</button>
//       </div>
//     </div>
//   </div>
        
    })
}

const noNews = () => {
    return (
        <div>Saat ini belum ada informasi tersedia</div>
    )
}

const  NewsLists = ({ news }) => {       //kita pasing ambil data yang ada di console {news}
    return !news ? noNews() : isNews(news)
    //dihapus juga boleh
    //     console.log('news = ', news)
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {data.title}
//       <div className="badge badge-secondary">NEW</div>
//     </h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">Fashion</div> 
//       <div className="badge badge-outline">Products</div>
//     </div>
//   </div>
// </div>



//     )
}

export default NewsLists