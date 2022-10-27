import { Link } from "@inertiajs/inertia-react";


const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div>
            <div className="btn-group">
                {/* jika ada halam selanjutnya makan akan menjalankan baris ini */}
                {prev &&
                <Link href={prev} className="btn btn-outline">«</Link>}
                {/* halaman saat itu */}
                <Link className="btn btn-outline">{current}</Link>  
                {/* jika nextnya masih ada maka akan muncul */}
                {next && 
                <Link href={next} className="btn btn-outline">»</Link>}
            </div>
        </div>
    )
}

export default Paginator