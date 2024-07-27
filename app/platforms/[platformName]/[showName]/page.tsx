"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface PlatformNamePageProps {
  params: {
    platformName: string;
    showName: string;
  };
}

export default function Home({ params }: PlatformNamePageProps) {
  const { platformName, showName } = params;

  return (
    <div className="w-full">
      <div className="relative h-[30rem]">
        <Image
          src="/shows/game-of-thrones-banner.jpg"
          fill
          alt="alt"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 z-10" />
      </div>

      <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 ">
        <h1>Game of thrones</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          nesciunt odio accusantium error eaque. Minima aut quam sed error
          maiores eligendi vel, tenetur quae recusandae quaerat suscipit,
          ratione quia mollitia sunt ad repellendus soluta ipsam dicta harum
          natus nisi perferendis! Incidunt nulla, corrupti voluptas repellat
          ullam laboriosam mollitia illo doloribus aliquid voluptate ab modi
          perspiciatis, tempore asperiores esse, obcaecati dolores totam
          repudiandae accusantium deleniti error? Eum consequatur mollitia
          exercitationem cumque? Et temporibus quos assumenda neque. Est
          voluptate deserunt iste labore consequatur dignissimos. Ex commodi
          placeat tenetur ipsam voluptas rem tempore possimus deserunt
          explicabo, ipsum harum dicta amet accusantium autem esse omnis est
          quia laboriosam sunt dignissimos? Ullam repellendus iste suscipit
          porro iusto explicabo, maiores dicta aspernatur ipsam provident fuga
          voluptatem totam exercitationem iure illum blanditiis atque velit
          consequuntur officia hic accusantium a temporibus! Vitae
          necessitatibus esse explicabo veritatis deleniti eum earum
          voluptatibus sit, fugiat libero repudiandae non quidem molestias
          nostrum voluptatum aliquid rerum dignissimos facere minima. Distinctio
          aspernatur atque rerum praesentium architecto! Veniam impedit suscipit
          ad? Quia commodi illum ut! Ut qui veritatis quos non in beatae dolorum
          harum ullam error aliquam numquam, repellat distinctio dicta,
          explicabo adipisci. Explicabo placeat temporibus quis cum alias
          excepturi dicta quasi dolore laboriosam in qui quia saepe
          reprehenderit assumenda sit atque, ad odio repellendus cumque maiores
          nihil vero laudantium dignissimos soluta? Recusandae adipisci esse
          est, dolor iure commodi error quidem, a dolores veniam fuga,
          doloremque officia id ipsa eos nemo eveniet! Quos, eum aliquam commodi
          ea ex, unde dolore, fuga nostrum officiis earum vitae iure non.
          Debitis, maiores dignissimos fugit quisquam quae, eius voluptate,
          itaque commodi deserunt sint eum. Et earum non deserunt est,
          praesentium ratione sint iure, eius ad eos sequi! Qui repudiandae
          quasi quas nostrum vel? Accusamus cumque asperiores at, natus tempore
          nobis aut neque consequuntur, accusantium odit fugiat libero soluta.
          Nemo magni nostrum assumenda at odit molestiae. Praesentium
          necessitatibus delectus quidem commodi debitis, exercitationem minus,
          laudantium odit reprehenderit eaque temporibus rem magni minima
          aperiam laboriosam similique eius pariatur sint modi architecto
          repudiandae sapiente. Labore commodi sunt consequatur facilis optio!
          Corporis distinctio doloribus perspiciatis, maiores reiciendis atque
          sed recusandae suscipit dolorem dolorum ratione ab doloremque delectus
          nihil maxime sit voluptates unde commodi necessitatibus. Ipsa
          recusandae sit aut repellat corrupti eaque quos nihil, quia dolorum!
          Voluptas possimus vero velit mollitia, ad similique distinctio
          recusandae. Accusantium aliquam ipsam ipsum necessitatibus quas cumque
          atque ratione placeat rerum odit voluptas, facere inventore officiis?
          Cupiditate excepturi laborum corrupti delectus! Accusamus placeat
          commodi facere incidunt architecto, possimus quas, asperiores cumque
          voluptas veritatis accusantium, porro sed nostrum reprehenderit qui.
          Eius enim neque tempore minus cumque architecto consequuntur
          inventore, consectetur nostrum error dignissimos. Distinctio corrupti
          fugit ratione aliquid, tenetur asperiores iure velit quod veniam
          excepturi voluptatibus, vitae recusandae! Architecto sint soluta, illo
          porro ipsam iure voluptates sed et, eum saepe suscipit cupiditate
          illum consectetur dolore quasi voluptate id. Minus quam fugiat tempora
          aut placeat nesciunt consequatur asperiores totam amet quas? Ipsam
          dicta dolorum repudiandae nesciunt dolore quae, nostrum omnis neque
          molestiae, dolores laborum quas vitae id perspiciatis! Nihil, magni
          asperiores.
        </p>
      </div>
    </div>
  );
}
