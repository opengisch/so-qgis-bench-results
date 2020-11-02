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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 2984.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 177.0], [0.3, 179.0], [0.4, 179.0], [0.5, 189.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 193.0], [1.1, 194.0], [1.2, 194.0], [1.3, 194.0], [1.4, 196.0], [1.5, 197.0], [1.6, 197.0], [1.7, 198.0], [1.8, 198.0], [1.9, 198.0], [2.0, 199.0], [2.1, 199.0], [2.2, 200.0], [2.3, 200.0], [2.4, 200.0], [2.5, 201.0], [2.6, 201.0], [2.7, 201.0], [2.8, 202.0], [2.9, 202.0], [3.0, 202.0], [3.1, 202.0], [3.2, 203.0], [3.3, 203.0], [3.4, 203.0], [3.5, 203.0], [3.6, 204.0], [3.7, 204.0], [3.8, 204.0], [3.9, 204.0], [4.0, 205.0], [4.1, 206.0], [4.2, 206.0], [4.3, 208.0], [4.4, 209.0], [4.5, 209.0], [4.6, 209.0], [4.7, 210.0], [4.8, 210.0], [4.9, 211.0], [5.0, 211.0], [5.1, 212.0], [5.2, 212.0], [5.3, 212.0], [5.4, 212.0], [5.5, 213.0], [5.6, 216.0], [5.7, 216.0], [5.8, 218.0], [5.9, 220.0], [6.0, 221.0], [6.1, 221.0], [6.2, 223.0], [6.3, 224.0], [6.4, 229.0], [6.5, 229.0], [6.6, 229.0], [6.7, 231.0], [6.8, 231.0], [6.9, 232.0], [7.0, 236.0], [7.1, 242.0], [7.2, 242.0], [7.3, 252.0], [7.4, 259.0], [7.5, 261.0], [7.6, 261.0], [7.7, 263.0], [7.8, 264.0], [7.9, 264.0], [8.0, 264.0], [8.1, 266.0], [8.2, 266.0], [8.3, 268.0], [8.4, 268.0], [8.5, 270.0], [8.6, 270.0], [8.7, 270.0], [8.8, 271.0], [8.9, 273.0], [9.0, 274.0], [9.1, 274.0], [9.2, 277.0], [9.3, 277.0], [9.4, 277.0], [9.5, 277.0], [9.6, 277.0], [9.7, 278.0], [9.8, 278.0], [9.9, 278.0], [10.0, 279.0], [10.1, 280.0], [10.2, 280.0], [10.3, 280.0], [10.4, 280.0], [10.5, 281.0], [10.6, 281.0], [10.7, 281.0], [10.8, 281.0], [10.9, 282.0], [11.0, 282.0], [11.1, 282.0], [11.2, 282.0], [11.3, 282.0], [11.4, 282.0], [11.5, 282.0], [11.6, 283.0], [11.7, 283.0], [11.8, 283.0], [11.9, 283.0], [12.0, 283.0], [12.1, 283.0], [12.2, 283.0], [12.3, 284.0], [12.4, 284.0], [12.5, 284.0], [12.6, 284.0], [12.7, 285.0], [12.8, 285.0], [12.9, 285.0], [13.0, 285.0], [13.1, 286.0], [13.2, 287.0], [13.3, 287.0], [13.4, 287.0], [13.5, 288.0], [13.6, 288.0], [13.7, 288.0], [13.8, 288.0], [13.9, 288.0], [14.0, 288.0], [14.1, 289.0], [14.2, 289.0], [14.3, 289.0], [14.4, 289.0], [14.5, 291.0], [14.6, 292.0], [14.7, 292.0], [14.8, 292.0], [14.9, 293.0], [15.0, 293.0], [15.1, 293.0], [15.2, 295.0], [15.3, 295.0], [15.4, 295.0], [15.5, 295.0], [15.6, 295.0], [15.7, 296.0], [15.8, 297.0], [15.9, 297.0], [16.0, 298.0], [16.1, 298.0], [16.2, 299.0], [16.3, 299.0], [16.4, 301.0], [16.5, 302.0], [16.6, 302.0], [16.7, 302.0], [16.8, 303.0], [16.9, 306.0], [17.0, 306.0], [17.1, 306.0], [17.2, 307.0], [17.3, 308.0], [17.4, 308.0], [17.5, 312.0], [17.6, 314.0], [17.7, 314.0], [17.8, 314.0], [17.9, 315.0], [18.0, 315.0], [18.1, 316.0], [18.2, 316.0], [18.3, 316.0], [18.4, 317.0], [18.5, 317.0], [18.6, 318.0], [18.7, 319.0], [18.8, 319.0], [18.9, 319.0], [19.0, 319.0], [19.1, 320.0], [19.2, 321.0], [19.3, 321.0], [19.4, 321.0], [19.5, 321.0], [19.6, 323.0], [19.7, 323.0], [19.8, 324.0], [19.9, 324.0], [20.0, 325.0], [20.1, 325.0], [20.2, 325.0], [20.3, 327.0], [20.4, 327.0], [20.5, 330.0], [20.6, 330.0], [20.7, 331.0], [20.8, 331.0], [20.9, 333.0], [21.0, 337.0], [21.1, 337.0], [21.2, 337.0], [21.3, 339.0], [21.4, 342.0], [21.5, 342.0], [21.6, 342.0], [21.7, 343.0], [21.8, 343.0], [21.9, 343.0], [22.0, 344.0], [22.1, 344.0], [22.2, 347.0], [22.3, 347.0], [22.4, 347.0], [22.5, 347.0], [22.6, 351.0], [22.7, 351.0], [22.8, 352.0], [22.9, 352.0], [23.0, 353.0], [23.1, 353.0], [23.2, 355.0], [23.3, 355.0], [23.4, 355.0], [23.5, 357.0], [23.6, 358.0], [23.7, 359.0], [23.8, 359.0], [23.9, 359.0], [24.0, 359.0], [24.1, 362.0], [24.2, 362.0], [24.3, 362.0], [24.4, 362.0], [24.5, 363.0], [24.6, 363.0], [24.7, 363.0], [24.8, 364.0], [24.9, 364.0], [25.0, 364.0], [25.1, 365.0], [25.2, 365.0], [25.3, 365.0], [25.4, 367.0], [25.5, 369.0], [25.6, 369.0], [25.7, 369.0], [25.8, 370.0], [25.9, 370.0], [26.0, 371.0], [26.1, 371.0], [26.2, 371.0], [26.3, 372.0], [26.4, 372.0], [26.5, 372.0], [26.6, 373.0], [26.7, 377.0], [26.8, 377.0], [26.9, 377.0], [27.0, 378.0], [27.1, 379.0], [27.2, 379.0], [27.3, 380.0], [27.4, 382.0], [27.5, 382.0], [27.6, 382.0], [27.7, 383.0], [27.8, 383.0], [27.9, 385.0], [28.0, 385.0], [28.1, 387.0], [28.2, 389.0], [28.3, 392.0], [28.4, 392.0], [28.5, 393.0], [28.6, 393.0], [28.7, 393.0], [28.8, 394.0], [28.9, 395.0], [29.0, 396.0], [29.1, 396.0], [29.2, 397.0], [29.3, 398.0], [29.4, 400.0], [29.5, 400.0], [29.6, 402.0], [29.7, 404.0], [29.8, 412.0], [29.9, 412.0], [30.0, 415.0], [30.1, 423.0], [30.2, 423.0], [30.3, 430.0], [30.4, 432.0], [30.5, 433.0], [30.6, 433.0], [30.7, 435.0], [30.8, 436.0], [30.9, 436.0], [31.0, 436.0], [31.1, 436.0], [31.2, 436.0], [31.3, 438.0], [31.4, 438.0], [31.5, 440.0], [31.6, 441.0], [31.7, 441.0], [31.8, 443.0], [31.9, 443.0], [32.0, 446.0], [32.1, 446.0], [32.2, 448.0], [32.3, 450.0], [32.4, 451.0], [32.5, 451.0], [32.6, 451.0], [32.7, 452.0], [32.8, 455.0], [32.9, 455.0], [33.0, 456.0], [33.1, 456.0], [33.2, 456.0], [33.3, 456.0], [33.4, 457.0], [33.5, 459.0], [33.6, 459.0], [33.7, 459.0], [33.8, 459.0], [33.9, 459.0], [34.0, 459.0], [34.1, 461.0], [34.2, 464.0], [34.3, 467.0], [34.4, 467.0], [34.5, 470.0], [34.6, 478.0], [34.7, 478.0], [34.8, 478.0], [34.9, 478.0], [35.0, 486.0], [35.1, 486.0], [35.2, 487.0], [35.3, 488.0], [35.4, 492.0], [35.5, 492.0], [35.6, 493.0], [35.7, 495.0], [35.8, 498.0], [35.9, 498.0], [36.0, 499.0], [36.1, 502.0], [36.2, 502.0], [36.3, 502.0], [36.4, 502.0], [36.5, 508.0], [36.6, 509.0], [36.7, 509.0], [36.8, 510.0], [36.9, 511.0], [37.0, 511.0], [37.1, 513.0], [37.2, 513.0], [37.3, 514.0], [37.4, 514.0], [37.5, 515.0], [37.6, 515.0], [37.7, 515.0], [37.8, 515.0], [37.9, 517.0], [38.0, 517.0], [38.1, 518.0], [38.2, 518.0], [38.3, 518.0], [38.4, 518.0], [38.5, 518.0], [38.6, 520.0], [38.7, 520.0], [38.8, 520.0], [38.9, 520.0], [39.0, 521.0], [39.1, 521.0], [39.2, 522.0], [39.3, 522.0], [39.4, 522.0], [39.5, 522.0], [39.6, 523.0], [39.7, 523.0], [39.8, 523.0], [39.9, 523.0], [40.0, 523.0], [40.1, 523.0], [40.2, 524.0], [40.3, 524.0], [40.4, 524.0], [40.5, 525.0], [40.6, 525.0], [40.7, 525.0], [40.8, 525.0], [40.9, 526.0], [41.0, 526.0], [41.1, 526.0], [41.2, 526.0], [41.3, 526.0], [41.4, 527.0], [41.5, 527.0], [41.6, 527.0], [41.7, 527.0], [41.8, 528.0], [41.9, 528.0], [42.0, 528.0], [42.1, 528.0], [42.2, 528.0], [42.3, 528.0], [42.4, 528.0], [42.5, 528.0], [42.6, 529.0], [42.7, 529.0], [42.8, 529.0], [42.9, 529.0], [43.0, 529.0], [43.1, 529.0], [43.2, 529.0], [43.3, 530.0], [43.4, 530.0], [43.5, 530.0], [43.6, 530.0], [43.7, 531.0], [43.8, 531.0], [43.9, 531.0], [44.0, 531.0], [44.1, 531.0], [44.2, 531.0], [44.3, 531.0], [44.4, 532.0], [44.5, 532.0], [44.6, 532.0], [44.7, 532.0], [44.8, 532.0], [44.9, 532.0], [45.0, 532.0], [45.1, 532.0], [45.2, 532.0], [45.3, 532.0], [45.4, 532.0], [45.5, 533.0], [45.6, 533.0], [45.7, 533.0], [45.8, 533.0], [45.9, 534.0], [46.0, 534.0], [46.1, 534.0], [46.2, 534.0], [46.3, 535.0], [46.4, 536.0], [46.5, 536.0], [46.6, 536.0], [46.7, 537.0], [46.8, 537.0], [46.9, 537.0], [47.0, 537.0], [47.1, 537.0], [47.2, 537.0], [47.3, 537.0], [47.4, 538.0], [47.5, 538.0], [47.6, 538.0], [47.7, 538.0], [47.8, 538.0], [47.9, 539.0], [48.0, 539.0], [48.1, 539.0], [48.2, 539.0], [48.3, 540.0], [48.4, 540.0], [48.5, 540.0], [48.6, 540.0], [48.7, 540.0], [48.8, 541.0], [48.9, 541.0], [49.0, 541.0], [49.1, 541.0], [49.2, 541.0], [49.3, 542.0], [49.4, 542.0], [49.5, 542.0], [49.6, 542.0], [49.7, 543.0], [49.8, 543.0], [49.9, 543.0], [50.0, 543.0], [50.1, 543.0], [50.2, 543.0], [50.3, 544.0], [50.4, 544.0], [50.5, 545.0], [50.6, 545.0], [50.7, 545.0], [50.8, 546.0], [50.9, 546.0], [51.0, 546.0], [51.1, 547.0], [51.2, 547.0], [51.3, 548.0], [51.4, 548.0], [51.5, 548.0], [51.6, 548.0], [51.7, 548.0], [51.8, 548.0], [51.9, 548.0], [52.0, 549.0], [52.1, 549.0], [52.2, 549.0], [52.3, 549.0], [52.4, 550.0], [52.5, 550.0], [52.6, 550.0], [52.7, 551.0], [52.8, 551.0], [52.9, 551.0], [53.0, 552.0], [53.1, 552.0], [53.2, 552.0], [53.3, 552.0], [53.4, 553.0], [53.5, 555.0], [53.6, 555.0], [53.7, 555.0], [53.8, 555.0], [53.9, 558.0], [54.0, 558.0], [54.1, 558.0], [54.2, 560.0], [54.3, 560.0], [54.4, 560.0], [54.5, 562.0], [54.6, 562.0], [54.7, 563.0], [54.8, 563.0], [54.9, 564.0], [55.0, 565.0], [55.1, 565.0], [55.2, 565.0], [55.3, 565.0], [55.4, 566.0], [55.5, 566.0], [55.6, 566.0], [55.7, 567.0], [55.8, 570.0], [55.9, 570.0], [56.0, 573.0], [56.1, 575.0], [56.2, 577.0], [56.3, 577.0], [56.4, 579.0], [56.5, 582.0], [56.6, 583.0], [56.7, 583.0], [56.8, 584.0], [56.9, 588.0], [57.0, 588.0], [57.1, 588.0], [57.2, 589.0], [57.3, 590.0], [57.4, 590.0], [57.5, 594.0], [57.6, 594.0], [57.7, 595.0], [57.8, 595.0], [57.9, 596.0], [58.0, 596.0], [58.1, 598.0], [58.2, 598.0], [58.3, 598.0], [58.4, 598.0], [58.5, 598.0], [58.6, 600.0], [58.7, 601.0], [58.8, 602.0], [58.9, 602.0], [59.0, 603.0], [59.1, 604.0], [59.2, 604.0], [59.3, 604.0], [59.4, 605.0], [59.5, 608.0], [59.6, 610.0], [59.7, 610.0], [59.8, 611.0], [59.9, 616.0], [60.0, 617.0], [60.1, 617.0], [60.2, 618.0], [60.3, 618.0], [60.4, 618.0], [60.5, 620.0], [60.6, 621.0], [60.7, 622.0], [60.8, 622.0], [60.9, 623.0], [61.0, 624.0], [61.1, 625.0], [61.2, 625.0], [61.3, 625.0], [61.4, 625.0], [61.5, 625.0], [61.6, 625.0], [61.7, 627.0], [61.8, 627.0], [61.9, 627.0], [62.0, 628.0], [62.1, 631.0], [62.2, 632.0], [62.3, 632.0], [62.4, 634.0], [62.5, 635.0], [62.6, 637.0], [62.7, 637.0], [62.8, 638.0], [62.9, 638.0], [63.0, 639.0], [63.1, 639.0], [63.2, 640.0], [63.3, 643.0], [63.4, 643.0], [63.5, 644.0], [63.6, 646.0], [63.7, 647.0], [63.8, 647.0], [63.9, 648.0], [64.0, 648.0], [64.1, 649.0], [64.2, 649.0], [64.3, 649.0], [64.4, 650.0], [64.5, 652.0], [64.6, 652.0], [64.7, 653.0], [64.8, 655.0], [64.9, 656.0], [65.0, 656.0], [65.1, 657.0], [65.2, 658.0], [65.3, 658.0], [65.4, 660.0], [65.5, 660.0], [65.6, 664.0], [65.7, 664.0], [65.8, 665.0], [65.9, 665.0], [66.0, 666.0], [66.1, 666.0], [66.2, 667.0], [66.3, 667.0], [66.4, 668.0], [66.5, 668.0], [66.6, 668.0], [66.7, 668.0], [66.8, 668.0], [66.9, 668.0], [67.0, 669.0], [67.1, 670.0], [67.2, 670.0], [67.3, 671.0], [67.4, 671.0], [67.5, 671.0], [67.6, 671.0], [67.7, 673.0], [67.8, 674.0], [67.9, 674.0], [68.0, 674.0], [68.1, 674.0], [68.2, 675.0], [68.3, 675.0], [68.4, 675.0], [68.5, 675.0], [68.6, 675.0], [68.7, 675.0], [68.8, 676.0], [68.9, 676.0], [69.0, 677.0], [69.1, 677.0], [69.2, 677.0], [69.3, 678.0], [69.4, 679.0], [69.5, 679.0], [69.6, 680.0], [69.7, 680.0], [69.8, 680.0], [69.9, 680.0], [70.0, 680.0], [70.1, 681.0], [70.2, 681.0], [70.3, 681.0], [70.4, 683.0], [70.5, 683.0], [70.6, 683.0], [70.7, 683.0], [70.8, 683.0], [70.9, 684.0], [71.0, 684.0], [71.1, 684.0], [71.2, 685.0], [71.3, 685.0], [71.4, 685.0], [71.5, 685.0], [71.6, 686.0], [71.7, 686.0], [71.8, 686.0], [71.9, 686.0], [72.0, 686.0], [72.1, 686.0], [72.2, 686.0], [72.3, 686.0], [72.4, 687.0], [72.5, 687.0], [72.6, 687.0], [72.7, 688.0], [72.8, 689.0], [72.9, 689.0], [73.0, 691.0], [73.1, 692.0], [73.2, 692.0], [73.3, 692.0], [73.4, 693.0], [73.5, 693.0], [73.6, 693.0], [73.7, 694.0], [73.8, 694.0], [73.9, 694.0], [74.0, 694.0], [74.1, 695.0], [74.2, 695.0], [74.3, 697.0], [74.4, 697.0], [74.5, 697.0], [74.6, 697.0], [74.7, 697.0], [74.8, 697.0], [74.9, 698.0], [75.0, 698.0], [75.1, 698.0], [75.2, 698.0], [75.3, 699.0], [75.4, 700.0], [75.5, 700.0], [75.6, 700.0], [75.7, 700.0], [75.8, 700.0], [75.9, 700.0], [76.0, 701.0], [76.1, 701.0], [76.2, 701.0], [76.3, 701.0], [76.4, 702.0], [76.5, 703.0], [76.6, 703.0], [76.7, 703.0], [76.8, 703.0], [76.9, 704.0], [77.0, 704.0], [77.1, 704.0], [77.2, 706.0], [77.3, 706.0], [77.4, 706.0], [77.5, 707.0], [77.6, 707.0], [77.7, 707.0], [77.8, 707.0], [77.9, 708.0], [78.0, 709.0], [78.1, 710.0], [78.2, 710.0], [78.3, 710.0], [78.4, 710.0], [78.5, 710.0], [78.6, 712.0], [78.7, 713.0], [78.8, 715.0], [78.9, 715.0], [79.0, 716.0], [79.1, 716.0], [79.2, 716.0], [79.3, 716.0], [79.4, 717.0], [79.5, 718.0], [79.6, 718.0], [79.7, 718.0], [79.8, 719.0], [79.9, 721.0], [80.0, 723.0], [80.1, 723.0], [80.2, 725.0], [80.3, 725.0], [80.4, 725.0], [80.5, 729.0], [80.6, 733.0], [80.7, 735.0], [80.8, 735.0], [80.9, 735.0], [81.0, 737.0], [81.1, 739.0], [81.2, 739.0], [81.3, 741.0], [81.4, 741.0], [81.5, 743.0], [81.6, 743.0], [81.7, 745.0], [81.8, 748.0], [81.9, 748.0], [82.0, 750.0], [82.1, 756.0], [82.2, 757.0], [82.3, 757.0], [82.4, 758.0], [82.5, 760.0], [82.6, 761.0], [82.7, 761.0], [82.8, 762.0], [82.9, 766.0], [83.0, 771.0], [83.1, 771.0], [83.2, 772.0], [83.3, 773.0], [83.4, 773.0], [83.5, 774.0], [83.6, 775.0], [83.7, 775.0], [83.8, 775.0], [83.9, 777.0], [84.0, 778.0], [84.1, 781.0], [84.2, 781.0], [84.3, 781.0], [84.4, 781.0], [84.5, 782.0], [84.6, 782.0], [84.7, 782.0], [84.8, 783.0], [84.9, 783.0], [85.0, 783.0], [85.1, 784.0], [85.2, 784.0], [85.3, 784.0], [85.4, 785.0], [85.5, 785.0], [85.6, 786.0], [85.7, 786.0], [85.8, 786.0], [85.9, 788.0], [86.0, 788.0], [86.1, 788.0], [86.2, 788.0], [86.3, 789.0], [86.4, 789.0], [86.5, 789.0], [86.6, 790.0], [86.7, 791.0], [86.8, 791.0], [86.9, 792.0], [87.0, 792.0], [87.1, 793.0], [87.2, 793.0], [87.3, 793.0], [87.4, 795.0], [87.5, 795.0], [87.6, 795.0], [87.7, 796.0], [87.8, 796.0], [87.9, 797.0], [88.0, 797.0], [88.1, 798.0], [88.2, 799.0], [88.3, 799.0], [88.4, 799.0], [88.5, 800.0], [88.6, 801.0], [88.7, 801.0], [88.8, 802.0], [88.9, 805.0], [89.0, 806.0], [89.1, 806.0], [89.2, 807.0], [89.3, 807.0], [89.4, 808.0], [89.5, 808.0], [89.6, 808.0], [89.7, 809.0], [89.8, 810.0], [89.9, 810.0], [90.0, 811.0], [90.1, 811.0], [90.2, 811.0], [90.3, 812.0], [90.4, 812.0], [90.5, 813.0], [90.6, 813.0], [90.7, 813.0], [90.8, 817.0], [90.9, 824.0], [91.0, 824.0], [91.1, 826.0], [91.2, 826.0], [91.3, 827.0], [91.4, 827.0], [91.5, 834.0], [91.6, 836.0], [91.7, 836.0], [91.8, 838.0], [91.9, 838.0], [92.0, 843.0], [92.1, 843.0], [92.2, 845.0], [92.3, 846.0], [92.4, 850.0], [92.5, 850.0], [92.6, 853.0], [92.7, 853.0], [92.8, 865.0], [92.9, 865.0], [93.0, 867.0], [93.1, 871.0], [93.2, 881.0], [93.3, 881.0], [93.4, 884.0], [93.5, 897.0], [93.6, 897.0], [93.7, 899.0], [93.8, 903.0], [93.9, 914.0], [94.0, 914.0], [94.1, 948.0], [94.2, 949.0], [94.3, 953.0], [94.4, 953.0], [94.5, 958.0], [94.6, 959.0], [94.7, 961.0], [94.8, 961.0], [94.9, 974.0], [95.0, 984.0], [95.1, 984.0], [95.2, 992.0], [95.3, 995.0], [95.4, 1000.0], [95.5, 1000.0], [95.6, 1001.0], [95.7, 1009.0], [95.8, 1024.0], [95.9, 1024.0], [96.0, 1049.0], [96.1, 1051.0], [96.2, 1058.0], [96.3, 1058.0], [96.4, 1060.0], [96.5, 1061.0], [96.6, 1067.0], [96.7, 1067.0], [96.8, 1089.0], [96.9, 1105.0], [97.0, 1105.0], [97.1, 1113.0], [97.2, 1118.0], [97.3, 1123.0], [97.4, 1123.0], [97.5, 1172.0], [97.6, 1187.0], [97.7, 1198.0], [97.8, 1198.0], [97.9, 1264.0], [98.0, 1325.0], [98.1, 1333.0], [98.2, 1333.0], [98.3, 1371.0], [98.4, 1384.0], [98.5, 1384.0], [98.6, 1404.0], [98.7, 1439.0], [98.8, 1481.0], [98.9, 1481.0], [99.0, 1723.0], [99.1, 1800.0], [99.2, 1848.0], [99.3, 1848.0], [99.4, 2709.0], [99.5, 2744.0], [99.6, 2861.0], [99.7, 2861.0], [99.8, 2916.0], [99.9, 2984.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 165.0, "series": [{"data": [[600.0, 124.0], [2800.0, 1.0], [700.0, 96.0], [2700.0, 2.0], [2900.0, 2.0], [200.0, 104.0], [800.0, 39.0], [900.0, 12.0], [1000.0, 11.0], [1100.0, 7.0], [300.0, 96.0], [1200.0, 1.0], [1300.0, 4.0], [1400.0, 3.0], [400.0, 49.0], [100.0, 16.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 165.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 265.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60422414E12, "maxY": 1.0, "series": [{"data": [[1.6042242E12, 1.0], [1.60422438E12, 1.0], [1.60422432E12, 1.0], [1.6042245E12, 1.0], [1.60422444E12, 1.0], [1.60422414E12, 1.0], [1.60422456E12, 1.0], [1.60422426E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422456E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 575.1455782312923, "minX": 1.0, "maxY": 575.1455782312923, "series": [{"data": [[1.0, 575.1455782312923]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 575.1455782312923]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.60422414E12, "maxY": 344659.18333333335, "series": [{"data": [[1.6042242E12, 344659.18333333335], [1.60422438E12, 341228.36666666664], [1.60422432E12, 195869.7], [1.6042245E12, 215643.31666666668], [1.60422444E12, 222655.9], [1.60422414E12, 61193.333333333336], [1.60422456E12, 238856.13333333333], [1.60422426E12, 215668.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042242E12, 727.5166666666667], [1.60422438E12, 905.6333333333333], [1.60422432E12, 864.5333333333333], [1.6042245E12, 703.5166666666667], [1.60422444E12, 688.7833333333333], [1.60422414E12, 105.93333333333334], [1.60422456E12, 854.3], [1.60422426E12, 672.8166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422456E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 466.43478260869557, "minX": 1.60422414E12, "maxY": 670.5842696629212, "series": [{"data": [[1.6042242E12, 644.6666666666665], [1.60422438E12, 490.75409836065586], [1.60422432E12, 517.704347826087], [1.6042245E12, 641.9247311827959], [1.60422444E12, 661.6813186813187], [1.60422414E12, 585.8571428571428], [1.60422456E12, 466.43478260869557], [1.60422426E12, 670.5842696629212]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422456E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 465.50434782608664, "minX": 1.60422414E12, "maxY": 669.2808988764045, "series": [{"data": [[1.6042242E12, 643.3645833333333], [1.60422438E12, 489.5901639344262], [1.60422432E12, 516.7478260869566], [1.6042245E12, 640.8602150537636], [1.60422444E12, 660.5384615384613], [1.60422414E12, 584.4285714285714], [1.60422456E12, 465.50434782608664], [1.60422426E12, 669.2808988764045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422456E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016393442622950824, "minX": 1.60422414E12, "maxY": 2.4285714285714284, "series": [{"data": [[1.6042242E12, 0.031249999999999993], [1.60422438E12, 0.016393442622950824], [1.60422432E12, 0.034782608695652174], [1.6042245E12, 0.03225806451612903], [1.60422444E12, 0.021978021978021983], [1.60422414E12, 2.4285714285714284], [1.60422456E12, 0.01739130434782609], [1.60422426E12, 0.02247191011235955]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422456E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.60422414E12, "maxY": 2984.0, "series": [{"data": [[1.6042242E12, 2984.0], [1.60422438E12, 2916.0], [1.60422432E12, 1848.0], [1.6042245E12, 984.0], [1.60422444E12, 1061.0], [1.60422414E12, 2861.0], [1.60422456E12, 1800.0], [1.60422426E12, 2744.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042242E12, 194.0], [1.60422438E12, 189.21399994134902], [1.60422432E12, 177.08799994468689], [1.6042245E12, 308.0], [1.60422444E12, 438.0], [1.60422414E12, 204.0], [1.60422456E12, 173.05599933624268], [1.60422426E12, 510.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042242E12, 194.0], [1.60422438E12, 189.43540002346037], [1.60422432E12, 177.29680002212524], [1.6042245E12, 308.0], [1.60422444E12, 438.0], [1.60422414E12, 204.0], [1.60422456E12, 175.56160026550293], [1.60422426E12, 510.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042242E12, 194.0], [1.60422438E12, 189.33699997067453], [1.60422432E12, 177.20399997234344], [1.6042245E12, 308.0], [1.60422444E12, 438.0], [1.60422414E12, 204.0], [1.60422456E12, 174.44799966812133], [1.60422426E12, 510.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042242E12, 194.0], [1.60422438E12, 189.0], [1.60422432E12, 177.0], [1.6042245E12, 308.0], [1.60422444E12, 438.0], [1.60422414E12, 204.0], [1.60422456E12, 172.0], [1.60422426E12, 510.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042242E12, 532.0], [1.60422438E12, 426.5], [1.60422432E12, 541.0], [1.6042245E12, 668.0], [1.60422444E12, 649.0], [1.60422414E12, 534.5], [1.60422456E12, 355.0], [1.60422426E12, 632.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 203.0, "minX": 1.0, "maxY": 701.0, "series": [{"data": [[1.0, 701.0], [2.0, 566.5], [4.0, 282.0], [5.0, 203.0], [3.0, 352.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 203.0, "minX": 1.0, "maxY": 700.0, "series": [{"data": [[1.0, 700.0], [2.0, 565.5], [4.0, 282.0], [5.0, 203.0], [3.0, 352.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60422414E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6042242E12, 1.6], [1.60422438E12, 2.033333333333333], [1.60422432E12, 1.9166666666666667], [1.6042245E12, 1.55], [1.60422444E12, 1.5166666666666666], [1.60422414E12, 0.25], [1.60422456E12, 1.9], [1.60422426E12, 1.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422456E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60422414E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6042242E12, 1.6], [1.60422438E12, 2.033333333333333], [1.60422432E12, 1.9166666666666667], [1.6042245E12, 1.55], [1.60422444E12, 1.5166666666666666], [1.60422414E12, 0.23333333333333334], [1.60422456E12, 1.9166666666666667], [1.60422426E12, 1.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422456E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60422414E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6042242E12, 1.6], [1.60422438E12, 2.033333333333333], [1.60422432E12, 1.9166666666666667], [1.6042245E12, 1.55], [1.60422444E12, 1.5166666666666666], [1.60422414E12, 0.23333333333333334], [1.60422456E12, 1.9166666666666667], [1.60422426E12, 1.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422456E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60422414E12, "maxY": 2.033333333333333, "series": [{"data": [[1.6042242E12, 1.6], [1.60422438E12, 2.033333333333333], [1.60422432E12, 1.9166666666666667], [1.6042245E12, 1.55], [1.60422444E12, 1.5166666666666666], [1.60422414E12, 0.23333333333333334], [1.60422456E12, 1.9166666666666667], [1.60422426E12, 1.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422456E12, "title": "Total Transactions Per Second"}},
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

