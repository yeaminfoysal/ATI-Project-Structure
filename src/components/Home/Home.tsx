
import Link from 'next/link'
import { ModeToggle } from '../modeToggle'
import { Button } from '../ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen py-12 px-10">
      <div className="flex justify-center gap-5">
        <ModeToggle />
        <Link href="/login">
          <Button className='bg-accent text-black'  size="sm">
            Log in
          </Button>
        </Link>
      </div>
      <h1 className="text-center text-5xl flex justify-center items-center mt-10 font-bold">Hello world</h1>
      <p className="mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sunt ea sequi iste neque mollitia molestias! Rerum cum laboriosam et corporis inventore quis porro. Vitae culpa architecto, perspiciatis non cum eligendi? Quia eveniet, culpa perspiciatis ipsam sequi iusto pariatur at hic repudiandae ipsum modi vitae soluta enim obcaecati dolor eligendi, sit voluptates vel libero odio expedita? Qui molestias obcaecati at voluptatem sunt? Aut eum nam, enim culpa delectus libero maiores architecto eaque maxime possimus corrupti quas necessitatibus unde praesentium atque nihil illo quibusdam ut, quisquam repudiandae exercitationem ab tempora voluptate et! Possimus mollitia facere cupiditate quibusdam harum laboriosam repellendus dolorum distinctio ipsa pariatur cum, doloremque et! Laborum, possimus voluptates? Et reiciendis sed non at, deleniti commodi perspiciatis dolor eaque enim. Aut, autem praesentium dicta labore sit numquam perferendis et doloremque excepturi impedit recusandae, odio id voluptate repellendus maxime rerum natus alias laudantium vitae facere nulla, voluptatum omnis maiores. Odit ipsa iure vitae, aliquid, dolore quia quisquam mollitia, a iusto distinctio asperiores commodi provident voluptatem ipsam et cupiditate error neque placeat minus sequi nam corporis totam tempore aliquam? Odio dolores a fuga cupiditate veniam atque, deserunt sequi voluptates, voluptate enim facere. Dignissimos officiis culpa aut maiores consequuntur provident dicta sunt, a molestias doloremque harum voluptatem asperiores minus deserunt alias distinctio? Laboriosam illum reprehenderit, pariatur consequatur tempora a esse sapiente rem alias suscipit sed aliquam voluptatem error natus consequuntur animi qui saepe consectetur mollitia quo, nesciunt dolorum. Necessitatibus perferendis in repellendus velit qui error tenetur iure dolores similique maiores doloremque itaque doloribus corporis nisi iste asperiores modi suscipit quos, quaerat aut. Expedita tempore odit consequatur quia asperiores. Impedit maiores doloremque, similique porro quibusdam incidunt itaque, eveniet, nesciunt amet quam nostrum illum aperiam. Aperiam dicta unde cumque beatae temporibus dolores blanditiis aliquid quas nihil voluptatum ea labore quidem, iure omnis quia magnam iste obcaecati voluptate repudiandae, similique debitis. Provident assumenda rerum mollitia, quo aliquid nobis nemo deleniti tenetur, cumque, voluptatibus maxime? Harum aperiam ab excepturi. Maxime nisi ullam debitis! Atque et tenetur aut saepe labore ab eaque debitis qui optio! Ut, ad nostrum! Mollitia, rerum neque? Eligendi distinctio voluptate corrupti, esse fuga animi, laborum beatae omnis reprehenderit aliquid, suscipit reiciendis quam blanditiis accusamus iure modi quia nemo vero mollitia tempora? Blanditiis laboriosam corporis animi necessitatibus quidem voluptatem eveniet, eius quam architecto numquam fugit recusandae in cumque doloremque nihil laudantium id iusto possimus perferendis aspernatur ipsam quos accusamus! Tempora asperiores explicabo perferendis non, sed dolores quidem nemo, alias ea accusantium nisi excepturi ipsam ex quia quam quod suscipit, saepe minus praesentium id. Accusantium nihil praesentium repudiandae rem voluptate, doloremque optio enim natus assumenda minima esse neque quo suscipit autem, facere molestiae. Nesciunt quis sequi, sint non ipsam nemo culpa animi qui neque atque natus consequatur numquam aliquid earum quo, cumque id libero saepe. Laborum ab aspernatur optio soluta est aliquid sed in aperiam facilis, deleniti excepturi voluptates quis, dolores voluptas adipisci enim. Tenetur porro ullam amet iusto quae, adipisci asperiores quam soluta sapiente vitae ipsum. Corporis, nisi officia. Distinctio nihil dignissimos harum optio odit.
      </p>
      <Link href="/tretr">Click me</Link>
    </div>
  )
}

// curl -X 'POST' \
//   'http://localhost:5000/ips/api/v1/auth/login' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "email": "mahfuzislam1695@gmail.com",
//   "password": "12345678"
// }
