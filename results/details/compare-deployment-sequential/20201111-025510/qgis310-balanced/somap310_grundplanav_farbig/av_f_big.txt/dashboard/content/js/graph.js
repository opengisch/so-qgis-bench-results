/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 2911.0, "series": [{"data": [[0.0, 187.0], [0.1, 187.0], [0.2, 187.0], [0.3, 191.0], [0.4, 191.0], [0.5, 191.0], [0.6, 192.0], [0.7, 192.0], [0.8, 192.0], [0.9, 197.0], [1.0, 197.0], [1.1, 198.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 200.0], [1.6, 200.0], [1.7, 201.0], [1.8, 202.0], [1.9, 202.0], [2.0, 202.0], [2.1, 203.0], [2.2, 204.0], [2.3, 204.0], [2.4, 206.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 210.0], [2.9, 210.0], [3.0, 211.0], [3.1, 211.0], [3.2, 212.0], [3.3, 212.0], [3.4, 212.0], [3.5, 213.0], [3.6, 213.0], [3.7, 213.0], [3.8, 213.0], [3.9, 213.0], [4.0, 213.0], [4.1, 214.0], [4.2, 214.0], [4.3, 214.0], [4.4, 214.0], [4.5, 215.0], [4.6, 215.0], [4.7, 215.0], [4.8, 216.0], [4.9, 216.0], [5.0, 216.0], [5.1, 216.0], [5.2, 217.0], [5.3, 217.0], [5.4, 218.0], [5.5, 219.0], [5.6, 219.0], [5.7, 219.0], [5.8, 220.0], [5.9, 220.0], [6.0, 221.0], [6.1, 221.0], [6.2, 222.0], [6.3, 224.0], [6.4, 226.0], [6.5, 226.0], [6.6, 226.0], [6.7, 227.0], [6.8, 227.0], [6.9, 227.0], [7.0, 228.0], [7.1, 231.0], [7.2, 231.0], [7.3, 232.0], [7.4, 233.0], [7.5, 234.0], [7.6, 234.0], [7.7, 246.0], [7.8, 262.0], [7.9, 265.0], [8.0, 265.0], [8.1, 271.0], [8.2, 272.0], [8.3, 272.0], [8.4, 272.0], [8.5, 272.0], [8.6, 273.0], [8.7, 273.0], [8.8, 274.0], [8.9, 275.0], [9.0, 275.0], [9.1, 275.0], [9.2, 276.0], [9.3, 277.0], [9.4, 278.0], [9.5, 278.0], [9.6, 279.0], [9.7, 279.0], [9.8, 279.0], [9.9, 279.0], [10.0, 279.0], [10.1, 279.0], [10.2, 279.0], [10.3, 280.0], [10.4, 280.0], [10.5, 281.0], [10.6, 281.0], [10.7, 281.0], [10.8, 282.0], [10.9, 282.0], [11.0, 282.0], [11.1, 283.0], [11.2, 283.0], [11.3, 285.0], [11.4, 285.0], [11.5, 285.0], [11.6, 285.0], [11.7, 285.0], [11.8, 286.0], [11.9, 287.0], [12.0, 287.0], [12.1, 287.0], [12.2, 287.0], [12.3, 287.0], [12.4, 287.0], [12.5, 287.0], [12.6, 288.0], [12.7, 289.0], [12.8, 290.0], [12.9, 290.0], [13.0, 291.0], [13.1, 291.0], [13.2, 293.0], [13.3, 293.0], [13.4, 293.0], [13.5, 294.0], [13.6, 294.0], [13.7, 294.0], [13.8, 294.0], [13.9, 295.0], [14.0, 295.0], [14.1, 295.0], [14.2, 295.0], [14.3, 296.0], [14.4, 296.0], [14.5, 296.0], [14.6, 296.0], [14.7, 296.0], [14.8, 296.0], [14.9, 296.0], [15.0, 297.0], [15.1, 297.0], [15.2, 298.0], [15.3, 299.0], [15.4, 300.0], [15.5, 300.0], [15.6, 300.0], [15.7, 300.0], [15.8, 300.0], [15.9, 300.0], [16.0, 301.0], [16.1, 302.0], [16.2, 302.0], [16.3, 302.0], [16.4, 304.0], [16.5, 304.0], [16.6, 306.0], [16.7, 306.0], [16.8, 306.0], [16.9, 307.0], [17.0, 307.0], [17.1, 308.0], [17.2, 309.0], [17.3, 309.0], [17.4, 309.0], [17.5, 312.0], [17.6, 313.0], [17.7, 313.0], [17.8, 313.0], [17.9, 314.0], [18.0, 315.0], [18.1, 315.0], [18.2, 315.0], [18.3, 316.0], [18.4, 317.0], [18.5, 317.0], [18.6, 318.0], [18.7, 319.0], [18.8, 319.0], [18.9, 319.0], [19.0, 321.0], [19.1, 322.0], [19.2, 323.0], [19.3, 323.0], [19.4, 329.0], [19.5, 330.0], [19.6, 331.0], [19.7, 331.0], [19.8, 331.0], [19.9, 333.0], [20.0, 334.0], [20.1, 334.0], [20.2, 334.0], [20.3, 337.0], [20.4, 337.0], [20.5, 340.0], [20.6, 342.0], [20.7, 342.0], [20.8, 342.0], [20.9, 342.0], [21.0, 343.0], [21.1, 343.0], [21.2, 343.0], [21.3, 346.0], [21.4, 348.0], [21.5, 350.0], [21.6, 350.0], [21.7, 352.0], [21.8, 353.0], [21.9, 353.0], [22.0, 353.0], [22.1, 355.0], [22.2, 355.0], [22.3, 355.0], [22.4, 356.0], [22.5, 357.0], [22.6, 357.0], [22.7, 357.0], [22.8, 357.0], [22.9, 358.0], [23.0, 360.0], [23.1, 360.0], [23.2, 360.0], [23.3, 360.0], [23.4, 360.0], [23.5, 360.0], [23.6, 360.0], [23.7, 361.0], [23.8, 361.0], [23.9, 361.0], [24.0, 361.0], [24.1, 363.0], [24.2, 363.0], [24.3, 364.0], [24.4, 364.0], [24.5, 364.0], [24.6, 364.0], [24.7, 365.0], [24.8, 365.0], [24.9, 366.0], [25.0, 366.0], [25.1, 366.0], [25.2, 366.0], [25.3, 366.0], [25.4, 367.0], [25.5, 367.0], [25.6, 368.0], [25.7, 368.0], [25.8, 368.0], [25.9, 368.0], [26.0, 369.0], [26.1, 369.0], [26.2, 369.0], [26.3, 370.0], [26.4, 370.0], [26.5, 370.0], [26.6, 371.0], [26.7, 372.0], [26.8, 372.0], [26.9, 373.0], [27.0, 373.0], [27.1, 377.0], [27.2, 377.0], [27.3, 378.0], [27.4, 378.0], [27.5, 378.0], [27.6, 378.0], [27.7, 380.0], [27.8, 380.0], [27.9, 383.0], [28.0, 383.0], [28.1, 384.0], [28.2, 387.0], [28.3, 388.0], [28.4, 388.0], [28.5, 389.0], [28.6, 391.0], [28.7, 391.0], [28.8, 391.0], [28.9, 392.0], [29.0, 393.0], [29.1, 393.0], [29.2, 396.0], [29.3, 398.0], [29.4, 405.0], [29.5, 405.0], [29.6, 405.0], [29.7, 405.0], [29.8, 408.0], [29.9, 408.0], [30.0, 409.0], [30.1, 411.0], [30.2, 411.0], [30.3, 414.0], [30.4, 422.0], [30.5, 423.0], [30.6, 423.0], [30.7, 427.0], [30.8, 429.0], [30.9, 431.0], [31.0, 431.0], [31.1, 431.0], [31.2, 434.0], [31.3, 439.0], [31.4, 439.0], [31.5, 439.0], [31.6, 440.0], [31.7, 440.0], [31.8, 442.0], [31.9, 446.0], [32.0, 447.0], [32.1, 447.0], [32.2, 448.0], [32.3, 449.0], [32.4, 449.0], [32.5, 449.0], [32.6, 450.0], [32.7, 450.0], [32.8, 454.0], [32.9, 454.0], [33.0, 454.0], [33.1, 454.0], [33.2, 460.0], [33.3, 460.0], [33.4, 460.0], [33.5, 462.0], [33.6, 462.0], [33.7, 464.0], [33.8, 466.0], [33.9, 467.0], [34.0, 467.0], [34.1, 469.0], [34.2, 470.0], [34.3, 472.0], [34.4, 472.0], [34.5, 475.0], [34.6, 476.0], [34.7, 480.0], [34.8, 480.0], [34.9, 481.0], [35.0, 483.0], [35.1, 483.0], [35.2, 485.0], [35.3, 488.0], [35.4, 491.0], [35.5, 491.0], [35.6, 492.0], [35.7, 492.0], [35.8, 496.0], [35.9, 496.0], [36.0, 496.0], [36.1, 499.0], [36.2, 502.0], [36.3, 502.0], [36.4, 503.0], [36.5, 504.0], [36.6, 505.0], [36.7, 505.0], [36.8, 506.0], [36.9, 507.0], [37.0, 507.0], [37.1, 508.0], [37.2, 508.0], [37.3, 509.0], [37.4, 509.0], [37.5, 510.0], [37.6, 512.0], [37.7, 513.0], [37.8, 513.0], [37.9, 513.0], [38.0, 513.0], [38.1, 515.0], [38.2, 515.0], [38.3, 518.0], [38.4, 518.0], [38.5, 518.0], [38.6, 519.0], [38.7, 519.0], [38.8, 520.0], [38.9, 520.0], [39.0, 520.0], [39.1, 521.0], [39.2, 521.0], [39.3, 521.0], [39.4, 522.0], [39.5, 524.0], [39.6, 524.0], [39.7, 524.0], [39.8, 524.0], [39.9, 524.0], [40.0, 525.0], [40.1, 525.0], [40.2, 525.0], [40.3, 525.0], [40.4, 525.0], [40.5, 525.0], [40.6, 526.0], [40.7, 526.0], [40.8, 526.0], [40.9, 526.0], [41.0, 526.0], [41.1, 526.0], [41.2, 526.0], [41.3, 526.0], [41.4, 526.0], [41.5, 526.0], [41.6, 526.0], [41.7, 527.0], [41.8, 527.0], [41.9, 527.0], [42.0, 527.0], [42.1, 527.0], [42.2, 528.0], [42.3, 528.0], [42.4, 528.0], [42.5, 528.0], [42.6, 528.0], [42.7, 528.0], [42.8, 528.0], [42.9, 528.0], [43.0, 528.0], [43.1, 528.0], [43.2, 529.0], [43.3, 529.0], [43.4, 529.0], [43.5, 529.0], [43.6, 530.0], [43.7, 530.0], [43.8, 530.0], [43.9, 530.0], [44.0, 530.0], [44.1, 530.0], [44.2, 530.0], [44.3, 531.0], [44.4, 531.0], [44.5, 531.0], [44.6, 531.0], [44.7, 531.0], [44.8, 531.0], [44.9, 532.0], [45.0, 532.0], [45.1, 532.0], [45.2, 532.0], [45.3, 532.0], [45.4, 532.0], [45.5, 533.0], [45.6, 534.0], [45.7, 534.0], [45.8, 534.0], [45.9, 534.0], [46.0, 534.0], [46.1, 534.0], [46.2, 535.0], [46.3, 535.0], [46.4, 536.0], [46.5, 536.0], [46.6, 536.0], [46.7, 537.0], [46.8, 537.0], [46.9, 537.0], [47.0, 537.0], [47.1, 538.0], [47.2, 538.0], [47.3, 538.0], [47.4, 538.0], [47.5, 539.0], [47.6, 539.0], [47.7, 539.0], [47.8, 539.0], [47.9, 540.0], [48.0, 540.0], [48.1, 540.0], [48.2, 540.0], [48.3, 540.0], [48.4, 540.0], [48.5, 541.0], [48.6, 541.0], [48.7, 541.0], [48.8, 541.0], [48.9, 541.0], [49.0, 541.0], [49.1, 541.0], [49.2, 542.0], [49.3, 542.0], [49.4, 542.0], [49.5, 542.0], [49.6, 543.0], [49.7, 543.0], [49.8, 543.0], [49.9, 543.0], [50.0, 543.0], [50.1, 544.0], [50.2, 544.0], [50.3, 545.0], [50.4, 546.0], [50.5, 546.0], [50.6, 546.0], [50.7, 546.0], [50.8, 547.0], [50.9, 547.0], [51.0, 547.0], [51.1, 548.0], [51.2, 548.0], [51.3, 548.0], [51.4, 548.0], [51.5, 548.0], [51.6, 548.0], [51.7, 548.0], [51.8, 549.0], [51.9, 549.0], [52.0, 549.0], [52.1, 549.0], [52.2, 550.0], [52.3, 550.0], [52.4, 551.0], [52.5, 551.0], [52.6, 551.0], [52.7, 551.0], [52.8, 552.0], [52.9, 552.0], [53.0, 552.0], [53.1, 552.0], [53.2, 552.0], [53.3, 552.0], [53.4, 553.0], [53.5, 554.0], [53.6, 554.0], [53.7, 555.0], [53.8, 555.0], [53.9, 555.0], [54.0, 555.0], [54.1, 557.0], [54.2, 557.0], [54.3, 558.0], [54.4, 558.0], [54.5, 558.0], [54.6, 560.0], [54.7, 561.0], [54.8, 561.0], [54.9, 562.0], [55.0, 562.0], [55.1, 562.0], [55.2, 562.0], [55.3, 562.0], [55.4, 563.0], [55.5, 563.0], [55.6, 564.0], [55.7, 564.0], [55.8, 564.0], [55.9, 564.0], [56.0, 567.0], [56.1, 573.0], [56.2, 574.0], [56.3, 574.0], [56.4, 574.0], [56.5, 574.0], [56.6, 574.0], [56.7, 574.0], [56.8, 575.0], [56.9, 576.0], [57.0, 576.0], [57.1, 576.0], [57.2, 577.0], [57.3, 577.0], [57.4, 577.0], [57.5, 579.0], [57.6, 580.0], [57.7, 585.0], [57.8, 585.0], [57.9, 588.0], [58.0, 588.0], [58.1, 589.0], [58.2, 589.0], [58.3, 590.0], [58.4, 591.0], [58.5, 591.0], [58.6, 591.0], [58.7, 591.0], [58.8, 592.0], [58.9, 592.0], [59.0, 593.0], [59.1, 594.0], [59.2, 597.0], [59.3, 597.0], [59.4, 598.0], [59.5, 599.0], [59.6, 600.0], [59.7, 600.0], [59.8, 600.0], [59.9, 600.0], [60.0, 600.0], [60.1, 600.0], [60.2, 601.0], [60.3, 601.0], [60.4, 601.0], [60.5, 602.0], [60.6, 602.0], [60.7, 603.0], [60.8, 603.0], [60.9, 603.0], [61.0, 606.0], [61.1, 607.0], [61.2, 607.0], [61.3, 611.0], [61.4, 611.0], [61.5, 612.0], [61.6, 612.0], [61.7, 612.0], [61.8, 612.0], [61.9, 612.0], [62.0, 613.0], [62.1, 614.0], [62.2, 617.0], [62.3, 617.0], [62.4, 617.0], [62.5, 620.0], [62.6, 620.0], [62.7, 620.0], [62.8, 626.0], [62.9, 627.0], [63.0, 627.0], [63.1, 627.0], [63.2, 629.0], [63.3, 630.0], [63.4, 630.0], [63.5, 630.0], [63.6, 639.0], [63.7, 639.0], [63.8, 639.0], [63.9, 642.0], [64.0, 643.0], [64.1, 643.0], [64.2, 643.0], [64.3, 644.0], [64.4, 645.0], [64.5, 645.0], [64.6, 645.0], [64.7, 649.0], [64.8, 649.0], [64.9, 649.0], [65.0, 649.0], [65.1, 649.0], [65.2, 652.0], [65.3, 652.0], [65.4, 653.0], [65.5, 653.0], [65.6, 659.0], [65.7, 659.0], [65.8, 660.0], [65.9, 660.0], [66.0, 660.0], [66.1, 660.0], [66.2, 660.0], [66.3, 661.0], [66.4, 662.0], [66.5, 662.0], [66.6, 663.0], [66.7, 663.0], [66.8, 663.0], [66.9, 664.0], [67.0, 664.0], [67.1, 665.0], [67.2, 665.0], [67.3, 665.0], [67.4, 666.0], [67.5, 667.0], [67.6, 667.0], [67.7, 668.0], [67.8, 670.0], [67.9, 670.0], [68.0, 670.0], [68.1, 671.0], [68.2, 671.0], [68.3, 672.0], [68.4, 672.0], [68.5, 672.0], [68.6, 673.0], [68.7, 673.0], [68.8, 673.0], [68.9, 673.0], [69.0, 673.0], [69.1, 673.0], [69.2, 674.0], [69.3, 674.0], [69.4, 674.0], [69.5, 674.0], [69.6, 675.0], [69.7, 675.0], [69.8, 675.0], [69.9, 675.0], [70.0, 676.0], [70.1, 676.0], [70.2, 676.0], [70.3, 677.0], [70.4, 677.0], [70.5, 677.0], [70.6, 677.0], [70.7, 677.0], [70.8, 678.0], [70.9, 678.0], [71.0, 678.0], [71.1, 678.0], [71.2, 679.0], [71.3, 679.0], [71.4, 679.0], [71.5, 680.0], [71.6, 682.0], [71.7, 682.0], [71.8, 683.0], [71.9, 683.0], [72.0, 683.0], [72.1, 683.0], [72.2, 683.0], [72.3, 684.0], [72.4, 684.0], [72.5, 684.0], [72.6, 684.0], [72.7, 685.0], [72.8, 686.0], [72.9, 686.0], [73.0, 686.0], [73.1, 687.0], [73.2, 688.0], [73.3, 688.0], [73.4, 689.0], [73.5, 689.0], [73.6, 689.0], [73.7, 691.0], [73.8, 691.0], [73.9, 693.0], [74.0, 693.0], [74.1, 693.0], [74.2, 693.0], [74.3, 693.0], [74.4, 693.0], [74.5, 694.0], [74.6, 694.0], [74.7, 694.0], [74.8, 694.0], [74.9, 695.0], [75.0, 695.0], [75.1, 695.0], [75.2, 696.0], [75.3, 697.0], [75.4, 697.0], [75.5, 697.0], [75.6, 697.0], [75.7, 698.0], [75.8, 700.0], [75.9, 700.0], [76.0, 700.0], [76.1, 700.0], [76.2, 701.0], [76.3, 701.0], [76.4, 701.0], [76.5, 702.0], [76.6, 702.0], [76.7, 702.0], [76.8, 702.0], [76.9, 703.0], [77.0, 703.0], [77.1, 705.0], [77.2, 706.0], [77.3, 706.0], [77.4, 706.0], [77.5, 707.0], [77.6, 708.0], [77.7, 708.0], [77.8, 708.0], [77.9, 709.0], [78.0, 709.0], [78.1, 711.0], [78.2, 711.0], [78.3, 712.0], [78.4, 712.0], [78.5, 712.0], [78.6, 713.0], [78.7, 714.0], [78.8, 714.0], [78.9, 714.0], [79.0, 715.0], [79.1, 716.0], [79.2, 717.0], [79.3, 717.0], [79.4, 717.0], [79.5, 718.0], [79.6, 719.0], [79.7, 719.0], [79.8, 720.0], [79.9, 720.0], [80.0, 725.0], [80.1, 725.0], [80.2, 726.0], [80.3, 727.0], [80.4, 727.0], [80.5, 727.0], [80.6, 727.0], [80.7, 728.0], [80.8, 728.0], [80.9, 728.0], [81.0, 729.0], [81.1, 731.0], [81.2, 731.0], [81.3, 731.0], [81.4, 734.0], [81.5, 734.0], [81.6, 734.0], [81.7, 738.0], [81.8, 739.0], [81.9, 739.0], [82.0, 740.0], [82.1, 743.0], [82.2, 746.0], [82.3, 746.0], [82.4, 748.0], [82.5, 753.0], [82.6, 756.0], [82.7, 756.0], [82.8, 757.0], [82.9, 757.0], [83.0, 758.0], [83.1, 758.0], [83.2, 759.0], [83.3, 761.0], [83.4, 761.0], [83.5, 761.0], [83.6, 761.0], [83.7, 762.0], [83.8, 762.0], [83.9, 762.0], [84.0, 763.0], [84.1, 767.0], [84.2, 767.0], [84.3, 768.0], [84.4, 769.0], [84.5, 771.0], [84.6, 771.0], [84.7, 771.0], [84.8, 772.0], [84.9, 773.0], [85.0, 773.0], [85.1, 776.0], [85.2, 776.0], [85.3, 776.0], [85.4, 777.0], [85.5, 777.0], [85.6, 778.0], [85.7, 778.0], [85.8, 778.0], [85.9, 778.0], [86.0, 778.0], [86.1, 778.0], [86.2, 779.0], [86.3, 782.0], [86.4, 782.0], [86.5, 782.0], [86.6, 782.0], [86.7, 785.0], [86.8, 785.0], [86.9, 785.0], [87.0, 786.0], [87.1, 787.0], [87.2, 787.0], [87.3, 788.0], [87.4, 788.0], [87.5, 788.0], [87.6, 788.0], [87.7, 788.0], [87.8, 789.0], [87.9, 789.0], [88.0, 789.0], [88.1, 790.0], [88.2, 792.0], [88.3, 792.0], [88.4, 792.0], [88.5, 793.0], [88.6, 793.0], [88.7, 793.0], [88.8, 794.0], [88.9, 795.0], [89.0, 795.0], [89.1, 795.0], [89.2, 796.0], [89.3, 797.0], [89.4, 799.0], [89.5, 799.0], [89.6, 801.0], [89.7, 802.0], [89.8, 803.0], [89.9, 803.0], [90.0, 805.0], [90.1, 805.0], [90.2, 805.0], [90.3, 806.0], [90.4, 806.0], [90.5, 806.0], [90.6, 806.0], [90.7, 808.0], [90.8, 810.0], [90.9, 811.0], [91.0, 811.0], [91.1, 812.0], [91.2, 814.0], [91.3, 815.0], [91.4, 815.0], [91.5, 816.0], [91.6, 816.0], [91.7, 816.0], [91.8, 818.0], [91.9, 823.0], [92.0, 830.0], [92.1, 830.0], [92.2, 833.0], [92.3, 840.0], [92.4, 843.0], [92.5, 843.0], [92.6, 849.0], [92.7, 853.0], [92.8, 853.0], [92.9, 853.0], [93.0, 857.0], [93.1, 863.0], [93.2, 868.0], [93.3, 868.0], [93.4, 871.0], [93.5, 880.0], [93.6, 880.0], [93.7, 890.0], [93.8, 909.0], [93.9, 913.0], [94.0, 913.0], [94.1, 913.0], [94.2, 925.0], [94.3, 926.0], [94.4, 926.0], [94.5, 928.0], [94.6, 946.0], [94.7, 950.0], [94.8, 950.0], [94.9, 973.0], [95.0, 977.0], [95.1, 977.0], [95.2, 978.0], [95.3, 982.0], [95.4, 986.0], [95.5, 986.0], [95.6, 991.0], [95.7, 992.0], [95.8, 1001.0], [95.9, 1001.0], [96.0, 1004.0], [96.1, 1025.0], [96.2, 1033.0], [96.3, 1033.0], [96.4, 1033.0], [96.5, 1041.0], [96.6, 1053.0], [96.7, 1053.0], [96.8, 1058.0], [96.9, 1081.0], [97.0, 1081.0], [97.1, 1096.0], [97.2, 1108.0], [97.3, 1112.0], [97.4, 1112.0], [97.5, 1118.0], [97.6, 1119.0], [97.7, 1161.0], [97.8, 1161.0], [97.9, 1208.0], [98.0, 1271.0], [98.1, 1321.0], [98.2, 1321.0], [98.3, 1323.0], [98.4, 1346.0], [98.5, 1346.0], [98.6, 1350.0], [98.7, 1369.0], [98.8, 1416.0], [98.9, 1416.0], [99.0, 1480.0], [99.1, 1751.0], [99.2, 1797.0], [99.3, 1797.0], [99.4, 1835.0], [99.5, 2745.0], [99.6, 2798.0], [99.7, 2798.0], [99.8, 2887.0], [99.9, 2911.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 172.0, "series": [{"data": [[600.0, 119.0], [2700.0, 2.0], [700.0, 101.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 103.0], [800.0, 31.0], [900.0, 15.0], [1000.0, 10.0], [1100.0, 5.0], [300.0, 103.0], [1200.0, 2.0], [1300.0, 5.0], [1400.0, 2.0], [400.0, 50.0], [100.0, 10.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 172.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 266.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.60506432E12, "maxY": 1.0, "series": [{"data": [[1.6050645E12, 1.0], [1.60506432E12, 1.0], [1.60506438E12, 1.0], [1.60506468E12, 1.0], [1.60506474E12, 1.0], [1.60506456E12, 1.0], [1.60506462E12, 1.0], [1.60506444E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506474E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 569.7224489795925, "minX": 1.0, "maxY": 569.7224489795925, "series": [{"data": [[1.0, 569.7224489795925]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 569.7224489795925]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 278.8833333333333, "minX": 1.60506432E12, "maxY": 318590.6, "series": [{"data": [[1.6050645E12, 244803.96666666667], [1.60506432E12, 137490.53333333333], [1.60506438E12, 318590.6], [1.60506468E12, 196408.86666666667], [1.60506474E12, 197365.91666666666], [1.60506456E12, 309384.13333333336], [1.60506462E12, 219458.3], [1.60506444E12, 212746.66666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050645E12, 917.8333333333334], [1.60506432E12, 278.8833333333333], [1.60506438E12, 728.3333333333334], [1.60506468E12, 800.6833333333333], [1.60506474E12, 575.1333333333333], [1.60506456E12, 830.0333333333333], [1.60506462E12, 719.4], [1.60506444E12, 672.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506474E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 486.7154471544717, "minX": 1.60506432E12, "maxY": 668.7528089887641, "series": [{"data": [[1.6050645E12, 486.7154471544717], [1.60506432E12, 582.081081081081], [1.60506438E12, 624.1562500000002], [1.60506468E12, 568.7075471698117], [1.60506474E12, 489.7948717948718], [1.60506456E12, 535.4594594594596], [1.60506462E12, 631.3894736842103], [1.60506444E12, 668.7528089887641]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506474E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 485.8536585365856, "minX": 1.60506432E12, "maxY": 667.4606741573034, "series": [{"data": [[1.6050645E12, 485.8536585365856], [1.60506432E12, 580.8918918918919], [1.60506438E12, 622.6874999999998], [1.60506468E12, 567.8490566037736], [1.60506474E12, 488.628205128205], [1.60506456E12, 534.1891891891889], [1.60506462E12, 630.3052631578946], [1.60506444E12, 667.4606741573034]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506474E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.016260162601626018, "minX": 1.60506432E12, "maxY": 0.8648648648648652, "series": [{"data": [[1.6050645E12, 0.016260162601626018], [1.60506432E12, 0.8648648648648652], [1.60506438E12, 0.031249999999999993], [1.60506468E12, 0.01886792452830189], [1.60506474E12, 0.025641025641025644], [1.60506456E12, 0.01801801801801802], [1.60506462E12, 0.021052631578947375], [1.60506444E12, 0.022471910112359553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506474E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 187.0, "minX": 1.60506432E12, "maxY": 2911.0, "series": [{"data": [[1.6050645E12, 1797.0], [1.60506432E12, 2911.0], [1.60506438E12, 1346.0], [1.60506468E12, 853.0], [1.60506474E12, 1835.0], [1.60506456E12, 2887.0], [1.60506462E12, 978.0], [1.60506444E12, 2798.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050645E12, 200.0], [1.60506432E12, 197.0], [1.60506438E12, 197.0], [1.60506468E12, 334.0], [1.60506474E12, 202.0], [1.60506456E12, 187.0], [1.60506462E12, 314.0], [1.60506444E12, 496.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050645E12, 200.0], [1.60506432E12, 197.0], [1.60506438E12, 197.0], [1.60506468E12, 334.47440008163454], [1.60506474E12, 202.0], [1.60506456E12, 187.0], [1.60506462E12, 314.0], [1.60506444E12, 496.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050645E12, 200.0], [1.60506432E12, 197.0], [1.60506438E12, 197.0], [1.60506468E12, 334.13199989795686], [1.60506474E12, 202.0], [1.60506456E12, 187.0], [1.60506462E12, 314.0], [1.60506444E12, 496.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050645E12, 200.0], [1.60506432E12, 197.0], [1.60506438E12, 197.0], [1.60506468E12, 334.0], [1.60506474E12, 202.0], [1.60506456E12, 187.0], [1.60506462E12, 314.0], [1.60506444E12, 496.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050645E12, 370.0], [1.60506432E12, 450.0], [1.60506438E12, 550.0], [1.60506468E12, 579.5], [1.60506474E12, 310.5], [1.60506456E12, 472.0], [1.60506462E12, 600.0], [1.60506444E12, 652.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506474E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 224.0, "minX": 1.0, "maxY": 710.0, "series": [{"data": [[1.0, 710.0], [4.0, 226.5], [2.0, 562.5], [5.0, 224.0], [3.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 223.5, "minX": 1.0, "maxY": 709.0, "series": [{"data": [[1.0, 709.0], [4.0, 226.5], [2.0, 562.0], [5.0, 223.5], [3.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60506432E12, "maxY": 2.05, "series": [{"data": [[1.6050645E12, 2.05], [1.60506432E12, 0.6333333333333333], [1.60506438E12, 1.6], [1.60506468E12, 1.7666666666666666], [1.60506474E12, 1.2833333333333334], [1.60506456E12, 1.85], [1.60506462E12, 1.5833333333333333], [1.60506444E12, 1.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506474E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60506432E12, "maxY": 2.05, "series": [{"data": [[1.6050645E12, 2.05], [1.60506432E12, 0.6166666666666667], [1.60506438E12, 1.6], [1.60506468E12, 1.7666666666666666], [1.60506474E12, 1.3], [1.60506456E12, 1.85], [1.60506462E12, 1.5833333333333333], [1.60506444E12, 1.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506474E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60506432E12, "maxY": 2.05, "series": [{"data": [[1.6050645E12, 2.05], [1.60506432E12, 0.6166666666666667], [1.60506438E12, 1.6], [1.60506468E12, 1.7666666666666666], [1.60506474E12, 1.3], [1.60506456E12, 1.85], [1.60506462E12, 1.5833333333333333], [1.60506444E12, 1.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506474E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60506432E12, "maxY": 2.05, "series": [{"data": [[1.6050645E12, 2.05], [1.60506432E12, 0.6166666666666667], [1.60506438E12, 1.6], [1.60506468E12, 1.7666666666666666], [1.60506474E12, 1.3], [1.60506456E12, 1.85], [1.60506462E12, 1.5833333333333333], [1.60506444E12, 1.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506474E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

