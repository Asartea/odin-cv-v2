import "../../styles/footer.css";

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Asartea</p>
            <p>
                <a
                    href="https://github.com/Asartea/odin-cv-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </a>
            </p>
        </footer>
    );
}

export default Footer;
