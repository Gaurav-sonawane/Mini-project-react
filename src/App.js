import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/page1">
        <page1 />
      </Route>

      <Route path="/page2">
        <page2 />
      </Route>
    </BrowserRouter>
  );
}

function page1() {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        quibusdam ipsa blanditiis consequatur voluptatem at excepturi dolore
        fuga saepe illo est doloremque soluta culpa voluptatibus non sit rem,
        modi nulla? Error, modi laboriosam laudantium enim consequuntur alias
        esse possimus porro aliquam fugiat fuga voluptate veniam inventore amet
        cum explicabo ipsa ducimus eaque sequi! Dignissimos beatae pariatur est
        incidunt sapiente! Architecto ipsa rerum omnis perspiciatis. Laborum non
        nihil earum, sint et, blanditiis tenetur provident cupiditate
        necessitatibus at suscipit sapiente iusto repudiandae voluptatem amet
        consequuntur accusantium possimus maiores accusamus fugiat illum placeat
        hic odio! Quos cumque dicta velit eaque illo, inventore corporis.
      </p>
    </div>
  );
}
function page2() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
        voluptate sed magni delectus. At voluptas illum possimus. Corporis
        facere ex laboriosam, distinctio cum aliquid eligendi. Accusantium
        tempore sequi in maxime dolore impedit quia explicabo possimus ad,
        veniam id, cumque ullam ipsa magnam quae delectus soluta quidem modi
        itaque. Aut amet quia accusantium eveniet tempore doloremque nobis nisi
        excepturi, consequuntur molestiae obcaecati vero veritatis dicta soluta
        iste porro alias nihil adipisci veniam a laborum iure aperiam. Deleniti
        veritatis nulla error pariatur magni impedit, corporis autem modi fuga
        praesentium optio placeat dolore temporibus quidem, qui aspernatur est
        repudiandae alias laborum ea! Ab doloremque rem laborum enim atque hic
        iste aliquam commodi quo recusandae nostrum omnis nemo tenetur
        assumenda, aperiam id alias nisi aspernatur reiciendis! Consequatur
        deleniti est sequi praesentium doloremque quae quia nesciunt aliquam
        voluptatibus harum excepturi repellendus, enim delectus quidem animi
        reprehenderit odit eaque amet cupiditate accusamus maxime ex? Eos, aut?
      </p>
    </div>
  );
}
