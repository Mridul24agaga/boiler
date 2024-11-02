import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-8">
          <div className="flex justify-center">
            <Image
              src="https://media.discordapp.net/attachments/1193183717548638301/1302228940248715274/Blue_Illustration_University_Circle_Brand_Logo_1.png?ex=67275ab5&is=67260935&hm=5fd0539205effa4c8e4b6ec62047afc70cb5440e102d286d07de736298f66647&=&format=webp&quality=lossless"
              alt="Ship Boiler Plate Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}