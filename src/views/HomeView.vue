<script setup>
import { onMounted } from 'vue'
import Hero from '../components/home/Hero.vue'
import About from '../components/home/About.vue'
import Works from '../components/home/Works.vue'

onMounted(() => {
  const animatedEllipses = document.querySelectorAll('.illustration__animated')

  animatedEllipses.forEach((ellipse) => {
    const bbox = ellipse.getBBox()
    const centerX = bbox.x + bbox.width / 2
    const centerY = bbox.y + bbox.height / 2

    ellipse.style.transformOrigin = centerX + 'px ' + centerY + 'px'
  })
})
</script>

<template>
  <main>
    <Hero />
    <About />
    <Works />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, numquam. Recusandae quis magni modi unde consectetur corporis laudantium fugiat molestiae iusto, maxime voluptatibus error in, aut illum veritatis provident quae?
    Impedit, maiores qui vitae doloremque sequi atque tempore eveniet, ea iste molestiae recusandae saepe fuga iure velit quisquam dolorum modi architecto! Consequuntur, voluptatem aperiam eveniet dolorum nisi dignissimos ipsa ex?
    Rem voluptate iste deserunt! Quasi doloremque molestias harum dolorem laudantium, earum tempore ad alias accusantium numquam nobis modi laborum expedita? Praesentium veniam consequuntur autem accusantium quaerat odit cupiditate fugit omnis!
    Dolorum molestias laborum impedit voluptate. Quasi porro doloribus aperiam recusandae blanditiis debitis quidem fugiat a ipsa et accusantium tempora, ex quia laudantium consectetur unde autem libero est doloremque. Voluptatem, quis!
    Eos, consequuntur excepturi mollitia aut dolores minima consectetur odit aspernatur iusto minus fugiat eum dolorum dicta eligendi aliquam nihil vel error laboriosam facilis? Cumque non tempore sint eligendi numquam? Quidem!
    In dignissimos neque explicabo, sit asperiores voluptates quasi adipisci excepturi dicta consequuntur quaerat quae quibusdam animi. Accusantium nesciunt numquam dolore, vitae minima et voluptatum in illo magnam itaque provident consequatur?
    Consectetur non nihil quia similique sed quam beatae, quod, consequuntur ut suscipit eos quisquam vitae. Dicta numquam sequi harum facilis expedita sit dolor, reiciendis deleniti corporis impedit unde nihil voluptatem?
    Cupiditate incidunt quo eius. Fugiat iste aut architecto voluptates odio temporibus nulla saepe iusto adipisci aliquam id, fugit culpa veniam quidem nostrum sunt hic debitis vel necessitatibus quo voluptas inventore?
    Similique aliquid hic praesentium repudiandae labore eaque, dicta vero, aliquam quo voluptates sunt doloremque cumque blanditiis sed quaerat consectetur natus, molestiae earum iure explicabo numquam et eius dolore? Maxime, maiores.
    Iusto, recusandae voluptate! Magnam illo rerum velit vel eum, ipsam nostrum consectetur aperiam maiores nemo soluta qui accusantium autem deserunt aliquid quo voluptates repellendus voluptatibus saepe earum ipsa consequatur quam.
    Assumenda accusamus nobis laborum eligendi reiciendis repellat? Sit modi officiis optio perspiciatis debitis aspernatur quas rem? Voluptas nemo dolores ut rerum nobis! Rerum reiciendis debitis esse nesciunt cupiditate aperiam mollitia.
    Modi, eaque? Facere doloremque distinctio quam exercitationem dolorum id repellendus dolorem, eveniet, placeat in ex corrupti quidem dicta ipsum consectetur fuga voluptate quos reprehenderit dolores dolore odit rem alias quisquam.
    Eius cum vitae doloremque ratione quas sint eligendi doloribus magni repellendus. Quod, vel. Perspiciatis ad quaerat quam? Nisi amet atque laudantium ea perspiciatis. Nesciunt numquam natus ab temporibus! Non, obcaecati.
    Minima soluta cum enim saepe iure incidunt, officia eligendi ad expedita consectetur, quos deleniti magni ea, quas ducimus libero nesciunt explicabo blanditiis vel esse? Nisi voluptatibus molestiae cum doloribus reprehenderit.
    Assumenda cumque ab laudantium saepe delectus accusantium? Unde rerum maiores earum fugiat quam et quisquam inventore, iste officia consequatur! Beatae aliquam reiciendis quas non asperiores. Delectus ducimus maiores consequatur quos.
    Ratione facilis magni corrupti et quas quisquam, enim, mollitia placeat error iste expedita ipsa dolores voluptatum amet, tempore molestias dicta veniam? Dignissimos minima a ea impedit praesentium, dolore harum rem.
    Culpa neque enim voluptates debitis at officia harum porro adipisci eaque accusantium natus veniam, tenetur quaerat laborum nemo fugit repellat laboriosam tempore veritatis facilis ratione alias nam excepturi error? Sunt!
    Id porro cumque eligendi repellendus quisquam, neque aperiam vel dolorem recusandae sunt aut? Tempora illum temporibus, fuga laboriosam nobis quis excepturi quae et, facere sed minima odit nesciunt laborum optio!
    Veniam possimus fugit reprehenderit maxime a dolor cumque cupiditate culpa, commodi distinctio consectetur impedit, accusantium praesentium deserunt natus! Sapiente repellat expedita dolorum dignissimos praesentium perferendis facere commodi accusantium, est aperiam.
    Molestias, unde minus! Facilis facere voluptatem nemo ipsam ad tenetur, ea nisi, perspiciatis vero error itaque sequi beatae. At, quae iusto. Placeat ut ducimus delectus nostrum ipsa? Maiores, temporibus consequatur!
    Saepe sunt adipisci quod magni quo alias autem tempore incidunt deleniti harum iure inventore omnis dolorum mollitia, architecto esse sed perferendis perspiciatis. Ea quis, porro dolore esse fugit explicabo blanditiis?
    Vel, esse eligendi nihil at sequi veniam reprehenderit omnis incidunt quos odit dolorem consequatur quis excepturi iste nisi voluptas, laboriosam, commodi obcaecati eveniet expedita dignissimos! Blanditiis distinctio corrupti incidunt debitis!
    Odit perferendis delectus dolorum ratione ab consequatur. Aspernatur dignissimos recusandae atque suscipit perferendis aperiam, dolorum assumenda, iusto nemo similique distinctio! Impedit similique nihil nostrum mollitia consectetur vitae commodi distinctio voluptate.
    Corrupti magnam adipisci non, doloremque quibusdam est cum recusandae, rerum debitis deleniti aliquid maxime ullam saepe fugiat odit ex. Perspiciatis sequi voluptatum quaerat odit, nisi laudantium velit sit distinctio at!
    Minus corporis, officiis commodi architecto culpa perferendis quae quam possimus, nulla id aperiam, impedit alias itaque qui optio sint rerum? Tempora vero illo minima fuga nisi molestias consectetur ut dolorum?</p>
    <p style="padding: 20px 0; border-bottom: 2px solid #FFF; margin-bottom: 5px;">End of thrones</p>
  </main>
</template>