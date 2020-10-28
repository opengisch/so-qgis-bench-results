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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 3014.0, "series": [{"data": [[0.0, 181.0], [0.1, 181.0], [0.2, 186.0], [0.3, 187.0], [0.4, 187.0], [0.5, 187.0], [0.6, 188.0], [0.7, 191.0], [0.8, 191.0], [0.9, 191.0], [1.0, 192.0], [1.1, 192.0], [1.2, 192.0], [1.3, 192.0], [1.4, 192.0], [1.5, 194.0], [1.6, 194.0], [1.7, 194.0], [1.8, 194.0], [1.9, 194.0], [2.0, 195.0], [2.1, 196.0], [2.2, 197.0], [2.3, 197.0], [2.4, 197.0], [2.5, 199.0], [2.6, 199.0], [2.7, 199.0], [2.8, 202.0], [2.9, 202.0], [3.0, 203.0], [3.1, 203.0], [3.2, 203.0], [3.3, 204.0], [3.4, 204.0], [3.5, 205.0], [3.6, 205.0], [3.7, 205.0], [3.8, 205.0], [3.9, 205.0], [4.0, 206.0], [4.1, 206.0], [4.2, 206.0], [4.3, 207.0], [4.4, 208.0], [4.5, 208.0], [4.6, 208.0], [4.7, 208.0], [4.8, 209.0], [4.9, 209.0], [5.0, 209.0], [5.1, 211.0], [5.2, 211.0], [5.3, 211.0], [5.4, 212.0], [5.5, 213.0], [5.6, 214.0], [5.7, 214.0], [5.8, 217.0], [5.9, 219.0], [6.0, 222.0], [6.1, 222.0], [6.2, 222.0], [6.3, 224.0], [6.4, 228.0], [6.5, 228.0], [6.6, 229.0], [6.7, 233.0], [6.8, 233.0], [6.9, 233.0], [7.0, 234.0], [7.1, 236.0], [7.2, 236.0], [7.3, 247.0], [7.4, 247.0], [7.5, 259.0], [7.6, 259.0], [7.7, 261.0], [7.8, 263.0], [7.9, 264.0], [8.0, 264.0], [8.1, 265.0], [8.2, 265.0], [8.3, 266.0], [8.4, 266.0], [8.5, 270.0], [8.6, 270.0], [8.7, 270.0], [8.8, 270.0], [8.9, 272.0], [9.0, 272.0], [9.1, 272.0], [9.2, 273.0], [9.3, 273.0], [9.4, 274.0], [9.5, 274.0], [9.6, 274.0], [9.7, 274.0], [9.8, 274.0], [9.9, 274.0], [10.0, 275.0], [10.1, 275.0], [10.2, 275.0], [10.3, 275.0], [10.4, 275.0], [10.5, 276.0], [10.6, 276.0], [10.7, 277.0], [10.8, 277.0], [10.9, 277.0], [11.0, 277.0], [11.1, 279.0], [11.2, 279.0], [11.3, 279.0], [11.4, 279.0], [11.5, 279.0], [11.6, 280.0], [11.7, 280.0], [11.8, 281.0], [11.9, 281.0], [12.0, 281.0], [12.1, 281.0], [12.2, 282.0], [12.3, 282.0], [12.4, 284.0], [12.5, 284.0], [12.6, 284.0], [12.7, 284.0], [12.8, 285.0], [12.9, 285.0], [13.0, 285.0], [13.1, 285.0], [13.2, 286.0], [13.3, 286.0], [13.4, 286.0], [13.5, 287.0], [13.6, 287.0], [13.7, 287.0], [13.8, 287.0], [13.9, 288.0], [14.0, 288.0], [14.1, 289.0], [14.2, 289.0], [14.3, 290.0], [14.4, 290.0], [14.5, 290.0], [14.6, 292.0], [14.7, 292.0], [14.8, 292.0], [14.9, 293.0], [15.0, 293.0], [15.1, 293.0], [15.2, 293.0], [15.3, 293.0], [15.4, 295.0], [15.5, 295.0], [15.6, 296.0], [15.7, 297.0], [15.8, 297.0], [15.9, 297.0], [16.0, 297.0], [16.1, 298.0], [16.2, 298.0], [16.3, 298.0], [16.4, 300.0], [16.5, 302.0], [16.6, 303.0], [16.7, 303.0], [16.8, 303.0], [16.9, 304.0], [17.0, 304.0], [17.1, 304.0], [17.2, 304.0], [17.3, 304.0], [17.4, 304.0], [17.5, 305.0], [17.6, 305.0], [17.7, 306.0], [17.8, 306.0], [17.9, 307.0], [18.0, 308.0], [18.1, 308.0], [18.2, 308.0], [18.3, 310.0], [18.4, 310.0], [18.5, 310.0], [18.6, 310.0], [18.7, 312.0], [18.8, 312.0], [18.9, 312.0], [19.0, 315.0], [19.1, 316.0], [19.2, 317.0], [19.3, 317.0], [19.4, 318.0], [19.5, 320.0], [19.6, 320.0], [19.7, 320.0], [19.8, 322.0], [19.9, 322.0], [20.0, 323.0], [20.1, 323.0], [20.2, 324.0], [20.3, 325.0], [20.4, 325.0], [20.5, 327.0], [20.6, 328.0], [20.7, 330.0], [20.8, 330.0], [20.9, 331.0], [21.0, 332.0], [21.1, 335.0], [21.2, 335.0], [21.3, 336.0], [21.4, 337.0], [21.5, 337.0], [21.6, 337.0], [21.7, 338.0], [21.8, 338.0], [21.9, 338.0], [22.0, 344.0], [22.1, 344.0], [22.2, 347.0], [22.3, 347.0], [22.4, 347.0], [22.5, 347.0], [22.6, 349.0], [22.7, 349.0], [22.8, 349.0], [22.9, 349.0], [23.0, 350.0], [23.1, 350.0], [23.2, 350.0], [23.3, 350.0], [23.4, 350.0], [23.5, 351.0], [23.6, 351.0], [23.7, 352.0], [23.8, 352.0], [23.9, 352.0], [24.0, 353.0], [24.1, 353.0], [24.2, 353.0], [24.3, 354.0], [24.4, 355.0], [24.5, 355.0], [24.6, 355.0], [24.7, 355.0], [24.8, 356.0], [24.9, 357.0], [25.0, 357.0], [25.1, 357.0], [25.2, 359.0], [25.3, 359.0], [25.4, 362.0], [25.5, 362.0], [25.6, 363.0], [25.7, 363.0], [25.8, 363.0], [25.9, 363.0], [26.0, 364.0], [26.1, 364.0], [26.2, 365.0], [26.3, 365.0], [26.4, 372.0], [26.5, 372.0], [26.6, 372.0], [26.7, 374.0], [26.8, 374.0], [26.9, 374.0], [27.0, 375.0], [27.1, 376.0], [27.2, 376.0], [27.3, 377.0], [27.4, 378.0], [27.5, 379.0], [27.6, 379.0], [27.7, 380.0], [27.8, 381.0], [27.9, 381.0], [28.0, 381.0], [28.1, 381.0], [28.2, 383.0], [28.3, 387.0], [28.4, 387.0], [28.5, 395.0], [28.6, 396.0], [28.7, 396.0], [28.8, 397.0], [28.9, 401.0], [29.0, 403.0], [29.1, 403.0], [29.2, 403.0], [29.3, 404.0], [29.4, 407.0], [29.5, 407.0], [29.6, 410.0], [29.7, 411.0], [29.8, 414.0], [29.9, 414.0], [30.0, 414.0], [30.1, 416.0], [30.2, 416.0], [30.3, 418.0], [30.4, 419.0], [30.5, 421.0], [30.6, 421.0], [30.7, 423.0], [30.8, 425.0], [30.9, 429.0], [31.0, 429.0], [31.1, 430.0], [31.2, 431.0], [31.3, 431.0], [31.4, 431.0], [31.5, 433.0], [31.6, 434.0], [31.7, 434.0], [31.8, 435.0], [31.9, 436.0], [32.0, 436.0], [32.1, 436.0], [32.2, 439.0], [32.3, 440.0], [32.4, 441.0], [32.5, 441.0], [32.6, 441.0], [32.7, 443.0], [32.8, 445.0], [32.9, 445.0], [33.0, 445.0], [33.1, 445.0], [33.2, 445.0], [33.3, 445.0], [33.4, 445.0], [33.5, 446.0], [33.6, 446.0], [33.7, 447.0], [33.8, 451.0], [33.9, 455.0], [34.0, 455.0], [34.1, 456.0], [34.2, 456.0], [34.3, 457.0], [34.4, 457.0], [34.5, 459.0], [34.6, 459.0], [34.7, 461.0], [34.8, 461.0], [34.9, 463.0], [35.0, 464.0], [35.1, 464.0], [35.2, 465.0], [35.3, 471.0], [35.4, 474.0], [35.5, 474.0], [35.6, 478.0], [35.7, 487.0], [35.8, 495.0], [35.9, 495.0], [36.0, 499.0], [36.1, 500.0], [36.2, 503.0], [36.3, 503.0], [36.4, 504.0], [36.5, 505.0], [36.6, 506.0], [36.7, 506.0], [36.8, 507.0], [36.9, 508.0], [37.0, 508.0], [37.1, 508.0], [37.2, 508.0], [37.3, 509.0], [37.4, 509.0], [37.5, 509.0], [37.6, 509.0], [37.7, 509.0], [37.8, 509.0], [37.9, 509.0], [38.0, 509.0], [38.1, 510.0], [38.2, 510.0], [38.3, 511.0], [38.4, 511.0], [38.5, 511.0], [38.6, 511.0], [38.7, 512.0], [38.8, 512.0], [38.9, 512.0], [39.0, 513.0], [39.1, 513.0], [39.2, 513.0], [39.3, 513.0], [39.4, 513.0], [39.5, 514.0], [39.6, 514.0], [39.7, 514.0], [39.8, 514.0], [39.9, 515.0], [40.0, 515.0], [40.1, 515.0], [40.2, 515.0], [40.3, 515.0], [40.4, 515.0], [40.5, 515.0], [40.6, 515.0], [40.7, 516.0], [40.8, 516.0], [40.9, 516.0], [41.0, 516.0], [41.1, 517.0], [41.2, 517.0], [41.3, 518.0], [41.4, 518.0], [41.5, 518.0], [41.6, 518.0], [41.7, 519.0], [41.8, 519.0], [41.9, 519.0], [42.0, 520.0], [42.1, 520.0], [42.2, 520.0], [42.3, 520.0], [42.4, 520.0], [42.5, 520.0], [42.6, 520.0], [42.7, 520.0], [42.8, 521.0], [42.9, 521.0], [43.0, 521.0], [43.1, 521.0], [43.2, 521.0], [43.3, 521.0], [43.4, 521.0], [43.5, 522.0], [43.6, 522.0], [43.7, 522.0], [43.8, 522.0], [43.9, 523.0], [44.0, 523.0], [44.1, 523.0], [44.2, 523.0], [44.3, 523.0], [44.4, 523.0], [44.5, 523.0], [44.6, 523.0], [44.7, 524.0], [44.8, 524.0], [44.9, 524.0], [45.0, 524.0], [45.1, 525.0], [45.2, 525.0], [45.3, 525.0], [45.4, 525.0], [45.5, 526.0], [45.6, 526.0], [45.7, 526.0], [45.8, 526.0], [45.9, 527.0], [46.0, 527.0], [46.1, 527.0], [46.2, 527.0], [46.3, 527.0], [46.4, 528.0], [46.5, 528.0], [46.6, 529.0], [46.7, 529.0], [46.8, 529.0], [46.9, 529.0], [47.0, 530.0], [47.1, 530.0], [47.2, 530.0], [47.3, 530.0], [47.4, 531.0], [47.5, 531.0], [47.6, 531.0], [47.7, 531.0], [47.8, 531.0], [47.9, 532.0], [48.0, 532.0], [48.1, 532.0], [48.2, 532.0], [48.3, 533.0], [48.4, 533.0], [48.5, 533.0], [48.6, 533.0], [48.7, 533.0], [48.8, 533.0], [48.9, 533.0], [49.0, 534.0], [49.1, 534.0], [49.2, 536.0], [49.3, 536.0], [49.4, 537.0], [49.5, 537.0], [49.6, 537.0], [49.7, 537.0], [49.8, 537.0], [49.9, 537.0], [50.0, 538.0], [50.1, 538.0], [50.2, 538.0], [50.3, 538.0], [50.4, 539.0], [50.5, 539.0], [50.6, 539.0], [50.7, 539.0], [50.8, 539.0], [50.9, 539.0], [51.0, 539.0], [51.1, 540.0], [51.2, 541.0], [51.3, 541.0], [51.4, 541.0], [51.5, 541.0], [51.6, 541.0], [51.7, 541.0], [51.8, 541.0], [51.9, 542.0], [52.0, 543.0], [52.1, 543.0], [52.2, 544.0], [52.3, 544.0], [52.4, 545.0], [52.5, 545.0], [52.6, 545.0], [52.7, 546.0], [52.8, 546.0], [52.9, 546.0], [53.0, 546.0], [53.1, 547.0], [53.2, 547.0], [53.3, 547.0], [53.4, 549.0], [53.5, 549.0], [53.6, 549.0], [53.7, 549.0], [53.8, 549.0], [53.9, 552.0], [54.0, 552.0], [54.1, 553.0], [54.2, 553.0], [54.3, 553.0], [54.4, 553.0], [54.5, 553.0], [54.6, 556.0], [54.7, 557.0], [54.8, 557.0], [54.9, 558.0], [55.0, 558.0], [55.1, 558.0], [55.2, 559.0], [55.3, 560.0], [55.4, 561.0], [55.5, 561.0], [55.6, 562.0], [55.7, 563.0], [55.8, 563.0], [55.9, 563.0], [56.0, 565.0], [56.1, 565.0], [56.2, 567.0], [56.3, 567.0], [56.4, 568.0], [56.5, 569.0], [56.6, 570.0], [56.7, 570.0], [56.8, 570.0], [56.9, 570.0], [57.0, 570.0], [57.1, 571.0], [57.2, 571.0], [57.3, 573.0], [57.4, 573.0], [57.5, 573.0], [57.6, 573.0], [57.7, 574.0], [57.8, 574.0], [57.9, 576.0], [58.0, 577.0], [58.1, 578.0], [58.2, 578.0], [58.3, 580.0], [58.4, 580.0], [58.5, 580.0], [58.6, 581.0], [58.7, 587.0], [58.8, 589.0], [58.9, 589.0], [59.0, 589.0], [59.1, 589.0], [59.2, 590.0], [59.3, 590.0], [59.4, 591.0], [59.5, 591.0], [59.6, 592.0], [59.7, 592.0], [59.8, 594.0], [59.9, 596.0], [60.0, 600.0], [60.1, 600.0], [60.2, 601.0], [60.3, 603.0], [60.4, 603.0], [60.5, 603.0], [60.6, 604.0], [60.7, 606.0], [60.8, 606.0], [60.9, 606.0], [61.0, 607.0], [61.1, 607.0], [61.2, 607.0], [61.3, 607.0], [61.4, 608.0], [61.5, 609.0], [61.6, 609.0], [61.7, 609.0], [61.8, 610.0], [61.9, 610.0], [62.0, 610.0], [62.1, 611.0], [62.2, 612.0], [62.3, 612.0], [62.4, 614.0], [62.5, 615.0], [62.6, 616.0], [62.7, 616.0], [62.8, 617.0], [62.9, 617.0], [63.0, 618.0], [63.1, 618.0], [63.2, 621.0], [63.3, 625.0], [63.4, 625.0], [63.5, 626.0], [63.6, 630.0], [63.7, 630.0], [63.8, 630.0], [63.9, 633.0], [64.0, 634.0], [64.1, 635.0], [64.2, 635.0], [64.3, 640.0], [64.4, 644.0], [64.5, 645.0], [64.6, 645.0], [64.7, 645.0], [64.8, 646.0], [64.9, 647.0], [65.0, 647.0], [65.1, 648.0], [65.2, 649.0], [65.3, 649.0], [65.4, 650.0], [65.5, 652.0], [65.6, 652.0], [65.7, 652.0], [65.8, 653.0], [65.9, 655.0], [66.0, 655.0], [66.1, 655.0], [66.2, 657.0], [66.3, 657.0], [66.4, 657.0], [66.5, 657.0], [66.6, 657.0], [66.7, 658.0], [66.8, 658.0], [66.9, 660.0], [67.0, 661.0], [67.1, 661.0], [67.2, 661.0], [67.3, 662.0], [67.4, 662.0], [67.5, 663.0], [67.6, 663.0], [67.7, 663.0], [67.8, 664.0], [67.9, 664.0], [68.0, 664.0], [68.1, 665.0], [68.2, 665.0], [68.3, 665.0], [68.4, 665.0], [68.5, 666.0], [68.6, 666.0], [68.7, 666.0], [68.8, 667.0], [68.9, 668.0], [69.0, 668.0], [69.1, 668.0], [69.2, 668.0], [69.3, 671.0], [69.4, 671.0], [69.5, 671.0], [69.6, 672.0], [69.7, 672.0], [69.8, 672.0], [69.9, 672.0], [70.0, 673.0], [70.1, 674.0], [70.2, 674.0], [70.3, 674.0], [70.4, 675.0], [70.5, 675.0], [70.6, 675.0], [70.7, 676.0], [70.8, 676.0], [70.9, 676.0], [71.0, 676.0], [71.1, 677.0], [71.2, 679.0], [71.3, 679.0], [71.4, 679.0], [71.5, 679.0], [71.6, 679.0], [71.7, 679.0], [71.8, 679.0], [71.9, 680.0], [72.0, 681.0], [72.1, 681.0], [72.2, 681.0], [72.3, 681.0], [72.4, 682.0], [72.5, 682.0], [72.6, 682.0], [72.7, 682.0], [72.8, 682.0], [72.9, 682.0], [73.0, 682.0], [73.1, 683.0], [73.2, 683.0], [73.3, 683.0], [73.4, 684.0], [73.5, 684.0], [73.6, 684.0], [73.7, 684.0], [73.8, 686.0], [73.9, 686.0], [74.0, 686.0], [74.1, 686.0], [74.2, 687.0], [74.3, 687.0], [74.4, 687.0], [74.5, 688.0], [74.6, 688.0], [74.7, 690.0], [74.8, 690.0], [74.9, 691.0], [75.0, 693.0], [75.1, 693.0], [75.2, 693.0], [75.3, 694.0], [75.4, 694.0], [75.5, 694.0], [75.6, 695.0], [75.7, 695.0], [75.8, 695.0], [75.9, 695.0], [76.0, 696.0], [76.1, 696.0], [76.2, 696.0], [76.3, 696.0], [76.4, 697.0], [76.5, 697.0], [76.6, 697.0], [76.7, 697.0], [76.8, 697.0], [76.9, 698.0], [77.0, 698.0], [77.1, 699.0], [77.2, 699.0], [77.3, 700.0], [77.4, 700.0], [77.5, 700.0], [77.6, 703.0], [77.7, 704.0], [77.8, 704.0], [77.9, 706.0], [78.0, 706.0], [78.1, 708.0], [78.2, 708.0], [78.3, 708.0], [78.4, 708.0], [78.5, 708.0], [78.6, 709.0], [78.7, 709.0], [78.8, 711.0], [78.9, 711.0], [79.0, 711.0], [79.1, 712.0], [79.2, 713.0], [79.3, 713.0], [79.4, 713.0], [79.5, 715.0], [79.6, 717.0], [79.7, 717.0], [79.8, 717.0], [79.9, 718.0], [80.0, 719.0], [80.1, 719.0], [80.2, 720.0], [80.3, 722.0], [80.4, 722.0], [80.5, 723.0], [80.6, 724.0], [80.7, 724.0], [80.8, 724.0], [80.9, 728.0], [81.0, 731.0], [81.1, 732.0], [81.2, 732.0], [81.3, 735.0], [81.4, 736.0], [81.5, 736.0], [81.6, 736.0], [81.7, 738.0], [81.8, 738.0], [81.9, 738.0], [82.0, 741.0], [82.1, 743.0], [82.2, 745.0], [82.3, 745.0], [82.4, 747.0], [82.5, 751.0], [82.6, 753.0], [82.7, 753.0], [82.8, 756.0], [82.9, 756.0], [83.0, 759.0], [83.1, 759.0], [83.2, 770.0], [83.3, 770.0], [83.4, 770.0], [83.5, 771.0], [83.6, 771.0], [83.7, 771.0], [83.8, 771.0], [83.9, 771.0], [84.0, 772.0], [84.1, 772.0], [84.2, 772.0], [84.3, 772.0], [84.4, 773.0], [84.5, 774.0], [84.6, 774.0], [84.7, 775.0], [84.8, 775.0], [84.9, 776.0], [85.0, 776.0], [85.1, 777.0], [85.2, 777.0], [85.3, 777.0], [85.4, 777.0], [85.5, 778.0], [85.6, 779.0], [85.7, 779.0], [85.8, 781.0], [85.9, 782.0], [86.0, 784.0], [86.1, 784.0], [86.2, 785.0], [86.3, 786.0], [86.4, 787.0], [86.5, 787.0], [86.6, 787.0], [86.7, 788.0], [86.8, 788.0], [86.9, 788.0], [87.0, 789.0], [87.1, 789.0], [87.2, 789.0], [87.3, 790.0], [87.4, 790.0], [87.5, 791.0], [87.6, 791.0], [87.7, 791.0], [87.8, 792.0], [87.9, 792.0], [88.0, 792.0], [88.1, 794.0], [88.2, 795.0], [88.3, 796.0], [88.4, 796.0], [88.5, 796.0], [88.6, 797.0], [88.7, 797.0], [88.8, 797.0], [88.9, 798.0], [89.0, 798.0], [89.1, 798.0], [89.2, 800.0], [89.3, 802.0], [89.4, 804.0], [89.5, 804.0], [89.6, 806.0], [89.7, 806.0], [89.8, 807.0], [89.9, 807.0], [90.0, 808.0], [90.1, 808.0], [90.2, 808.0], [90.3, 808.0], [90.4, 810.0], [90.5, 811.0], [90.6, 811.0], [90.7, 815.0], [90.8, 815.0], [90.9, 821.0], [91.0, 821.0], [91.1, 826.0], [91.2, 827.0], [91.3, 830.0], [91.4, 830.0], [91.5, 831.0], [91.6, 834.0], [91.7, 834.0], [91.8, 835.0], [91.9, 840.0], [92.0, 840.0], [92.1, 840.0], [92.2, 841.0], [92.3, 853.0], [92.4, 855.0], [92.5, 855.0], [92.6, 859.0], [92.7, 864.0], [92.8, 866.0], [92.9, 866.0], [93.0, 869.0], [93.1, 873.0], [93.2, 873.0], [93.3, 873.0], [93.4, 876.0], [93.5, 878.0], [93.6, 878.0], [93.7, 882.0], [93.8, 893.0], [93.9, 893.0], [94.0, 893.0], [94.1, 900.0], [94.2, 903.0], [94.3, 912.0], [94.4, 912.0], [94.5, 913.0], [94.6, 929.0], [94.7, 930.0], [94.8, 930.0], [94.9, 980.0], [95.0, 985.0], [95.1, 985.0], [95.2, 998.0], [95.3, 999.0], [95.4, 1009.0], [95.5, 1009.0], [95.6, 1013.0], [95.7, 1016.0], [95.8, 1023.0], [95.9, 1023.0], [96.0, 1027.0], [96.1, 1034.0], [96.2, 1043.0], [96.3, 1043.0], [96.4, 1045.0], [96.5, 1050.0], [96.6, 1058.0], [96.7, 1058.0], [96.8, 1070.0], [96.9, 1071.0], [97.0, 1071.0], [97.1, 1113.0], [97.2, 1141.0], [97.3, 1152.0], [97.4, 1152.0], [97.5, 1153.0], [97.6, 1159.0], [97.7, 1237.0], [97.8, 1237.0], [97.9, 1260.0], [98.0, 1300.0], [98.1, 1304.0], [98.2, 1304.0], [98.3, 1322.0], [98.4, 1336.0], [98.5, 1336.0], [98.6, 1339.0], [98.7, 1340.0], [98.8, 1465.0], [98.9, 1465.0], [99.0, 1728.0], [99.1, 1775.0], [99.2, 1856.0], [99.3, 1856.0], [99.4, 2630.0], [99.5, 2804.0], [99.6, 2960.0], [99.7, 2960.0], [99.8, 2960.0], [99.9, 3014.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 176.0, "series": [{"data": [[600.0, 127.0], [2600.0, 1.0], [2800.0, 1.0], [700.0, 87.0], [2900.0, 2.0], [3000.0, 1.0], [200.0, 100.0], [800.0, 36.0], [900.0, 10.0], [1000.0, 12.0], [1100.0, 5.0], [300.0, 92.0], [1200.0, 2.0], [1300.0, 6.0], [1400.0, 1.0], [400.0, 53.0], [100.0, 20.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 176.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 461.0, "series": [{"data": [[0.0, 266.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 461.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60384434E12, "maxY": 1.0, "series": [{"data": [[1.60384446E12, 1.0], [1.60384476E12, 1.0], [1.60384458E12, 1.0], [1.6038444E12, 1.0], [1.6038447E12, 1.0], [1.60384452E12, 1.0], [1.60384434E12, 1.0], [1.60384464E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384476E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 568.6394557823135, "minX": 1.0, "maxY": 568.6394557823135, "series": [{"data": [[1.0, 568.6394557823135]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 568.6394557823135]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 152.31666666666666, "minX": 1.60384434E12, "maxY": 320338.9166666667, "series": [{"data": [[1.60384446E12, 214406.91666666666], [1.60384476E12, 212923.06666666668], [1.60384458E12, 320338.9166666667], [1.6038444E12, 314144.95], [1.6038447E12, 210792.0], [1.60384452E12, 238525.53333333333], [1.60384434E12, 111692.13333333333], [1.60384464E12, 212987.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384446E12, 672.7333333333333], [1.60384476E12, 695.9], [1.60384458E12, 883.85], [1.6038444E12, 756.6833333333333], [1.6038447E12, 756.1166666666667], [1.60384452E12, 893.95], [1.60384434E12, 152.31666666666666], [1.60384464E12, 711.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384476E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 470.65957446808505, "minX": 1.60384434E12, "maxY": 735.1999999999999, "series": [{"data": [[1.60384446E12, 665.9775280898876], [1.60384476E12, 470.65957446808505], [1.60384458E12, 506.6722689075629], [1.6038444E12, 599.9500000000002], [1.6038447E12, 596.9599999999999], [1.60384452E12, 503.2352941176468], [1.60384434E12, 735.1999999999999], [1.60384464E12, 636.8297872340428]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384476E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 469.51063829787233, "minX": 1.60384434E12, "maxY": 732.9000000000001, "series": [{"data": [[1.60384446E12, 664.6516853932583], [1.60384476E12, 469.51063829787233], [1.60384458E12, 505.4705882352941], [1.6038444E12, 598.7800000000001], [1.6038447E12, 595.9700000000005], [1.60384452E12, 502.2521008403361], [1.60384434E12, 732.9000000000001], [1.60384464E12, 635.8191489361704]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384476E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010638297872340429, "minX": 1.60384434E12, "maxY": 1.65, "series": [{"data": [[1.60384446E12, 0.02247191011235955], [1.60384476E12, 0.010638297872340429], [1.60384458E12, 0.016806722689075633], [1.6038444E12, 0.02], [1.6038447E12, 0.020000000000000004], [1.60384452E12, 0.01680672268907563], [1.60384434E12, 1.65], [1.60384464E12, 0.010638297872340429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384476E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60384434E12, "maxY": 3014.0, "series": [{"data": [[1.60384446E12, 2630.0], [1.60384476E12, 1775.0], [1.60384458E12, 2960.0], [1.6038444E12, 2960.0], [1.6038447E12, 998.0], [1.60384452E12, 1856.0], [1.60384434E12, 3014.0], [1.60384464E12, 1070.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384446E12, 495.0], [1.60384476E12, 199.0], [1.60384458E12, 181.39999985694885], [1.6038444E12, 188.0], [1.6038447E12, 289.0], [1.60384452E12, 197.39999985694885], [1.60384434E12, 204.0], [1.60384464E12, 456.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384446E12, 495.0], [1.60384476E12, 199.0], [1.60384458E12, 181.94000005722046], [1.6038444E12, 188.0], [1.6038447E12, 289.0], [1.60384452E12, 197.94000005722046], [1.60384434E12, 204.0], [1.60384464E12, 456.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384446E12, 495.0], [1.60384476E12, 199.0], [1.60384458E12, 181.69999992847443], [1.6038444E12, 188.0], [1.6038447E12, 289.0], [1.60384452E12, 197.69999992847443], [1.60384434E12, 204.0], [1.60384464E12, 456.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384446E12, 495.0], [1.60384476E12, 199.0], [1.60384458E12, 181.0], [1.6038444E12, 188.0], [1.6038447E12, 289.0], [1.60384452E12, 197.0], [1.60384434E12, 204.0], [1.60384464E12, 456.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384446E12, 630.0], [1.60384476E12, 329.5], [1.60384458E12, 443.0], [1.6038444E12, 531.0], [1.6038447E12, 617.5], [1.60384452E12, 508.0], [1.60384434E12, 519.0], [1.60384464E12, 606.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384476E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 207.0, "minX": 1.0, "maxY": 690.0, "series": [{"data": [[1.0, 690.0], [2.0, 558.5], [4.0, 274.5], [5.0, 207.0], [3.0, 344.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 207.0, "minX": 1.0, "maxY": 689.0, "series": [{"data": [[1.0, 689.0], [2.0, 557.5], [4.0, 274.0], [5.0, 207.0], [3.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.60384434E12, "maxY": 1.9833333333333334, "series": [{"data": [[1.60384446E12, 1.4833333333333334], [1.60384476E12, 1.55], [1.60384458E12, 1.9833333333333334], [1.6038444E12, 1.6666666666666667], [1.6038447E12, 1.6666666666666667], [1.60384452E12, 1.9833333333333334], [1.60384434E12, 0.35], [1.60384464E12, 1.5666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384476E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384434E12, "maxY": 1.9833333333333334, "series": [{"data": [[1.60384446E12, 1.4833333333333334], [1.60384476E12, 1.5666666666666667], [1.60384458E12, 1.9833333333333334], [1.6038444E12, 1.6666666666666667], [1.6038447E12, 1.6666666666666667], [1.60384452E12, 1.9833333333333334], [1.60384434E12, 0.3333333333333333], [1.60384464E12, 1.5666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384476E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384434E12, "maxY": 1.9833333333333334, "series": [{"data": [[1.60384446E12, 1.4833333333333334], [1.60384476E12, 1.5666666666666667], [1.60384458E12, 1.9833333333333334], [1.6038444E12, 1.6666666666666667], [1.6038447E12, 1.6666666666666667], [1.60384452E12, 1.9833333333333334], [1.60384434E12, 0.3333333333333333], [1.60384464E12, 1.5666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384476E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384434E12, "maxY": 1.9833333333333334, "series": [{"data": [[1.60384446E12, 1.4833333333333334], [1.60384476E12, 1.5666666666666667], [1.60384458E12, 1.9833333333333334], [1.6038444E12, 1.6666666666666667], [1.6038447E12, 1.6666666666666667], [1.60384452E12, 1.9833333333333334], [1.60384434E12, 0.3333333333333333], [1.60384464E12, 1.5666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384476E12, "title": "Total Transactions Per Second"}},
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

