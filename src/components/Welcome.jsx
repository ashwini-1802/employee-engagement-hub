import Footer from './Footer'
import WelcomeMenu from './WelcomeMenu'

function Welcome() {
    return (
        <div>
            <WelcomeMenu />
            <img
                src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System-770x515.png"
                alt="Employee Management System"
                className="w-full max-w-full h-auto object-cover"
                
            />

            <Footer />
        </div>
    )
}

export default Welcome
