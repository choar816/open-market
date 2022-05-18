import React from 'react';

const TabContent = ({ chosenTab }) => {
  const tabContents = [];
  tabContents[0] = (
    <article>
      <h2>This is the content of details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus
        nesciunt animi ullam sapiente! Incidunt odio hic dicta nesciunt nisi
        quaerat illum quibusdam ipsa adipisci sed corporis fugit, perspiciatis
        reprehenderit! Accusantium eaque dolor quibusdam quisquam cum, sint
        assumenda neque perferendis ducimus omnis vero, quae nam doloribus ipsam
        molestias est! Pariatur maxime eum totam consequatur! Ipsum debitis quia
        est vero velit. Debitis eaque optio aspernatur laborum consectetur.
        Fugit libero consequuntur velit iusto, minus rem. Ut, culpa, cum
        molestias nisi voluptates placeat temporibus nesciunt expedita quaerat
        facere, neque debitis optio nihil ea. Deserunt id sed perspiciatis enim
        aspernatur, beatae aliquid pariatur? Quisquam totam numquam asperiores?
        Voluptate numquam, perferendis minima alias consequatur sequi
        perspiciatis illum, provident totam, fuga veniam reprehenderit? Amet,
        nobis quis? Magni ipsa, suscipit tenetur totam earum dolorem fuga iusto
        saepe alias, amet, minima est impedit? Ut eum, omnis similique maxime
        tenetur placeat ratione debitis molestias aliquid nostrum sit,
        necessitatibus animi!
      </p>
    </article>
  );
  tabContents[1] = (
    <article>
      <h2>This is the content of reviews</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        nemo voluptatibus similique praesentium eveniet earum vero officiis,
        nostrum laudantium veritatis rem, vel eaque rerum. Accusamus explicabo
        natus deleniti inventore corporis. Et sequi autem doloremque soluta
        itaque, debitis, incidunt consectetur aperiam, nemo delectus distinctio?
        Mollitia impedit, minima labore a, quaerat rerum nostrum et dolore
        placeat laudantium voluptatibus sunt dicta quos cum! A labore odit unde
        saepe repellat veritatis dolor pariatur quae aliquam voluptas possimus,
        esse, eius optio blanditiis nisi voluptatem suscipit itaque deserunt
        temporibus quaerat molestias nesciunt sint laboriosam necessitatibus!
        Amet.
      </p>
    </article>
  );
  tabContents[2] = (
    <article>
      <h2>This is the content of Q&A</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        expedita fugiat quas voluptatibus provident quod itaque pariatur
        excepturi, impedit neque sit illo maiores vero odit culpa facere
        doloremque eos error? Odio et doloribus explicabo iure magni dolores
        itaque reprehenderit id, laboriosam numquam totam voluptatem molestias
        facilis unde fuga aut ullam illo saepe voluptates asperiores doloremque
        aspernatur rem? Corrupti, enim sit! Maiores, at error. Culpa repudiandae
        amet modi ducimus accusamus ea ullam consectetur? Dolores vel, obcaecati
        eos sequi repudiandae perferendis. Ex sapiente cumque quasi quae, dolore
        vero expedita laborum. Quis, eos!
      </p>
    </article>
  );
  tabContents[3] = (
    <article>
      <h2>This is the content of return/exchange info</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam
        aliquam quas aperiam quis reprehenderit iusto numquam illum quod sint,
        dolorem minus dicta, tempore, consequatur ut debitis veritatis
        laudantium at? Doloremque praesentium ipsam culpa cupiditate minima ea
        maiores quia nulla officia ipsum? Ipsum suscipit accusantium, autem iste
        minima aut dolor labore nemo facere reiciendis, voluptatum asperiores
        animi. Nesciunt, repellat id? Quis accusamus magnam id unde ut debitis
        inventore est harum ratione neque nihil atque, aliquid obcaecati
        quisquam rerum suscipit a eligendi assumenda et qui mollitia sunt eum
        tenetur! Explicabo, rerum!
      </p>
    </article>
  );

  return <>{tabContents[chosenTab]}</>;
};

export default TabContent;
