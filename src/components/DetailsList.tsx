
interface IDetailList { type: string, content?: string | [] | number | boolean | JSX.Element[] | JSX.Element }

const DetailsList = ({ type, content }: IDetailList) => {
    return <div className="flex mt-1"><h4 className="mr-2">{type}</h4> <p>{content || 'N/A'}</p></div>
}

export default DetailsList