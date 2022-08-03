type Props = {
    children: React.ReactNode
    title: string
    content?: string
}

const ContainerSection: React.FC<Props> = ({ children, title, content }) => {
    return (
        <section className="container__section">
            <h2>{title}</h2>
            <br />
            <div className="content">
                {
                    content && content.length > 0 &&
                    <p>
                        {content}
                    </p>
                }
                {children}
            </div>
        </section>
    )
}

export default ContainerSection