import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }

  getProductDetails(productId) {
    return {
      name: 'Tough Mojo Jacket®',
      catalog: 'Clothing',
      subCatalog: 'Outerwear',
      description: '300 GRAMS OF PRIMALOFT® ONE INSULATION<br>SCHOELLER® MICROFIBER SHELL<br>DIAGONAL QUILTING<br>MICROFIBER RIPSTOP LINER<br>ZIPPER GARAGE AT COLLAR<br>ANCHORED BOTTOM-HEM ADJUSTERS<br>3-IN-1 FRONT POCKETS<br>ZIPPERED CHEST POCKET<br>TWO INTERIOR ZIPPERED POCKETS<br>MADE IN THE PHILIPPINES<br>'
    };
  }

  getUserReviews(productId) {
    // provide mocked data
    return [
      {
        userName: 'Shaun White',
        userId: 1,
        rate: 4,
        date: '08/20/2013',
        title: 'This Thing is a monster!',
        // tslint:disable-next-line:max-line-length
        content: 'picked up this jacket for use in San Francisco and the surrounding Bay Area (Lake Tahce included). I use this jacket for everything. It is often cloudy/drizzly/cold in SF and this jacket deals with it all. I have not tried in heavy rain, but in drizzly conditions, the DWR treatment definitely makes small drops bead right off. It also has a nice fleece-Like liner inside and keeps me really warm down to 4o degrees or so. In Tahce, I have used this with a shirt or base Layer, mid Later fleece, and then this jacket. I don\' get clod top easily but in temps 20.S - 30.S I felt great (with some gloves and a beanie of course). I have not tried it skiing yet because I snowboard and to be honest it wouldn\'t be quite Large enough (I like baggier snowboard clothing). But I have seen people who wear softshells skiing all the time. I also use this when I go to work and want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great I am 6\' and about igo lbs (34 in arms) and the Large fits perfect The pockets are well designed as well. The soft shell is the new \'do-everything\' jacket: wind/water resistent but also maleabLe and comfy for wearing anywhere. I highly recommend this jacket'
      },
      {
        userName: 'Jennie Loren',
        userId: 2,
        rate: 3,
        date: '01/12/2013',
        title: 'Luv it so much I bought 2!',
        // tslint:disable-next-line:max-line-length
        content: 'Loved this jacket . much from previous years I decided to buy a second in a different color. I\'m tall and fairly slender and its tailored silhouette fits me nicely. For perspective I\'m around 6\'3- -150 lbs. and a large does the trick. wear this for all of fall and into the winter. Despite not being bulky or baggy I find it good and warm for anything down to 4o degrees and perhaps lower if you\'re keeping up on your Layering. For weather at freezing or below you should consider something heavier.'
      }
    ];
  }
}
