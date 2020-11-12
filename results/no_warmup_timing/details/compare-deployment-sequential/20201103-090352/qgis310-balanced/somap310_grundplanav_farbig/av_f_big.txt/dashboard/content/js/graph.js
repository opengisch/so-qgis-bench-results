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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 3214.0, "series": [{"data": [[0.0, 174.0], [0.1, 174.0], [0.2, 178.0], [0.3, 178.0], [0.4, 178.0], [0.5, 180.0], [0.6, 191.0], [0.7, 195.0], [0.8, 195.0], [0.9, 197.0], [1.0, 202.0], [1.1, 204.0], [1.2, 204.0], [1.3, 205.0], [1.4, 205.0], [1.5, 207.0], [1.6, 207.0], [1.7, 207.0], [1.8, 208.0], [1.9, 208.0], [2.0, 209.0], [2.1, 210.0], [2.2, 211.0], [2.3, 211.0], [2.4, 211.0], [2.5, 211.0], [2.6, 212.0], [2.7, 212.0], [2.8, 213.0], [2.9, 213.0], [3.0, 213.0], [3.1, 213.0], [3.2, 213.0], [3.3, 213.0], [3.4, 213.0], [3.5, 215.0], [3.6, 215.0], [3.7, 215.0], [3.8, 215.0], [3.9, 216.0], [4.0, 216.0], [4.1, 216.0], [4.2, 216.0], [4.3, 217.0], [4.4, 219.0], [4.5, 220.0], [4.6, 220.0], [4.7, 220.0], [4.8, 220.0], [4.9, 221.0], [5.0, 221.0], [5.1, 221.0], [5.2, 221.0], [5.3, 221.0], [5.4, 223.0], [5.5, 224.0], [5.6, 224.0], [5.7, 224.0], [5.8, 225.0], [5.9, 226.0], [6.0, 227.0], [6.1, 227.0], [6.2, 227.0], [6.3, 237.0], [6.4, 239.0], [6.5, 239.0], [6.6, 242.0], [6.7, 242.0], [6.8, 242.0], [6.9, 244.0], [7.0, 244.0], [7.1, 249.0], [7.2, 249.0], [7.3, 249.0], [7.4, 251.0], [7.5, 253.0], [7.6, 253.0], [7.7, 254.0], [7.8, 261.0], [7.9, 274.0], [8.0, 274.0], [8.1, 275.0], [8.2, 276.0], [8.3, 278.0], [8.4, 278.0], [8.5, 279.0], [8.6, 281.0], [8.7, 281.0], [8.8, 282.0], [8.9, 283.0], [9.0, 283.0], [9.1, 283.0], [9.2, 284.0], [9.3, 284.0], [9.4, 284.0], [9.5, 284.0], [9.6, 285.0], [9.7, 285.0], [9.8, 289.0], [9.9, 289.0], [10.0, 289.0], [10.1, 290.0], [10.2, 290.0], [10.3, 290.0], [10.4, 290.0], [10.5, 291.0], [10.6, 291.0], [10.7, 291.0], [10.8, 291.0], [10.9, 293.0], [11.0, 293.0], [11.1, 295.0], [11.2, 295.0], [11.3, 295.0], [11.4, 295.0], [11.5, 295.0], [11.6, 295.0], [11.7, 295.0], [11.8, 295.0], [11.9, 296.0], [12.0, 296.0], [12.1, 296.0], [12.2, 296.0], [12.3, 298.0], [12.4, 298.0], [12.5, 298.0], [12.6, 299.0], [12.7, 301.0], [12.8, 301.0], [12.9, 301.0], [13.0, 302.0], [13.1, 302.0], [13.2, 303.0], [13.3, 303.0], [13.4, 303.0], [13.5, 304.0], [13.6, 304.0], [13.7, 304.0], [13.8, 304.0], [13.9, 305.0], [14.0, 305.0], [14.1, 305.0], [14.2, 305.0], [14.3, 306.0], [14.4, 306.0], [14.5, 306.0], [14.6, 306.0], [14.7, 306.0], [14.8, 306.0], [14.9, 306.0], [15.0, 308.0], [15.1, 308.0], [15.2, 308.0], [15.3, 309.0], [15.4, 310.0], [15.5, 310.0], [15.6, 311.0], [15.7, 311.0], [15.8, 312.0], [15.9, 312.0], [16.0, 312.0], [16.1, 314.0], [16.2, 315.0], [16.3, 315.0], [16.4, 315.0], [16.5, 315.0], [16.6, 316.0], [16.7, 316.0], [16.8, 317.0], [16.9, 317.0], [17.0, 317.0], [17.1, 318.0], [17.2, 318.0], [17.3, 319.0], [17.4, 319.0], [17.5, 320.0], [17.6, 320.0], [17.7, 320.0], [17.8, 320.0], [17.9, 323.0], [18.0, 324.0], [18.1, 324.0], [18.2, 324.0], [18.3, 324.0], [18.4, 328.0], [18.5, 328.0], [18.6, 329.0], [18.7, 330.0], [18.8, 332.0], [18.9, 332.0], [19.0, 332.0], [19.1, 334.0], [19.2, 336.0], [19.3, 336.0], [19.4, 337.0], [19.5, 339.0], [19.6, 340.0], [19.7, 340.0], [19.8, 342.0], [19.9, 345.0], [20.0, 345.0], [20.1, 345.0], [20.2, 348.0], [20.3, 353.0], [20.4, 353.0], [20.5, 353.0], [20.6, 354.0], [20.7, 357.0], [20.8, 357.0], [20.9, 358.0], [21.0, 358.0], [21.1, 358.0], [21.2, 358.0], [21.3, 359.0], [21.4, 359.0], [21.5, 359.0], [21.6, 359.0], [21.7, 359.0], [21.8, 360.0], [21.9, 360.0], [22.0, 361.0], [22.1, 361.0], [22.2, 361.0], [22.3, 361.0], [22.4, 362.0], [22.5, 363.0], [22.6, 363.0], [22.7, 363.0], [22.8, 364.0], [22.9, 364.0], [23.0, 364.0], [23.1, 364.0], [23.2, 364.0], [23.3, 366.0], [23.4, 366.0], [23.5, 366.0], [23.6, 366.0], [23.7, 367.0], [23.8, 367.0], [23.9, 367.0], [24.0, 368.0], [24.1, 368.0], [24.2, 368.0], [24.3, 369.0], [24.4, 370.0], [24.5, 370.0], [24.6, 370.0], [24.7, 370.0], [24.8, 370.0], [24.9, 371.0], [25.0, 371.0], [25.1, 371.0], [25.2, 372.0], [25.3, 372.0], [25.4, 372.0], [25.5, 373.0], [25.6, 375.0], [25.7, 375.0], [25.8, 375.0], [25.9, 376.0], [26.0, 376.0], [26.1, 376.0], [26.2, 377.0], [26.3, 377.0], [26.4, 377.0], [26.5, 377.0], [26.6, 378.0], [26.7, 379.0], [26.8, 379.0], [26.9, 379.0], [27.0, 381.0], [27.1, 381.0], [27.2, 381.0], [27.3, 381.0], [27.4, 383.0], [27.5, 384.0], [27.6, 384.0], [27.7, 384.0], [27.8, 385.0], [27.9, 386.0], [28.0, 386.0], [28.1, 387.0], [28.2, 389.0], [28.3, 392.0], [28.4, 392.0], [28.5, 392.0], [28.6, 398.0], [28.7, 398.0], [28.8, 398.0], [28.9, 399.0], [29.0, 399.0], [29.1, 399.0], [29.2, 399.0], [29.3, 402.0], [29.4, 403.0], [29.5, 403.0], [29.6, 411.0], [29.7, 413.0], [29.8, 427.0], [29.9, 427.0], [30.0, 428.0], [30.1, 432.0], [30.2, 432.0], [30.3, 433.0], [30.4, 433.0], [30.5, 436.0], [30.6, 436.0], [30.7, 441.0], [30.8, 442.0], [30.9, 445.0], [31.0, 445.0], [31.1, 446.0], [31.2, 447.0], [31.3, 449.0], [31.4, 449.0], [31.5, 450.0], [31.6, 452.0], [31.7, 452.0], [31.8, 453.0], [31.9, 455.0], [32.0, 457.0], [32.1, 457.0], [32.2, 458.0], [32.3, 458.0], [32.4, 459.0], [32.5, 459.0], [32.6, 460.0], [32.7, 460.0], [32.8, 461.0], [32.9, 461.0], [33.0, 462.0], [33.1, 463.0], [33.2, 464.0], [33.3, 464.0], [33.4, 467.0], [33.5, 467.0], [33.6, 467.0], [33.7, 467.0], [33.8, 468.0], [33.9, 469.0], [34.0, 469.0], [34.1, 470.0], [34.2, 471.0], [34.3, 477.0], [34.4, 477.0], [34.5, 477.0], [34.6, 478.0], [34.7, 478.0], [34.8, 478.0], [34.9, 482.0], [35.0, 482.0], [35.1, 482.0], [35.2, 484.0], [35.3, 487.0], [35.4, 494.0], [35.5, 494.0], [35.6, 495.0], [35.7, 506.0], [35.8, 507.0], [35.9, 507.0], [36.0, 512.0], [36.1, 518.0], [36.2, 519.0], [36.3, 519.0], [36.4, 522.0], [36.5, 527.0], [36.6, 528.0], [36.7, 528.0], [36.8, 528.0], [36.9, 528.0], [37.0, 528.0], [37.1, 530.0], [37.2, 530.0], [37.3, 531.0], [37.4, 531.0], [37.5, 533.0], [37.6, 533.0], [37.7, 534.0], [37.8, 534.0], [37.9, 534.0], [38.0, 534.0], [38.1, 535.0], [38.2, 535.0], [38.3, 535.0], [38.4, 537.0], [38.5, 537.0], [38.6, 539.0], [38.7, 539.0], [38.8, 539.0], [38.9, 539.0], [39.0, 541.0], [39.1, 541.0], [39.2, 541.0], [39.3, 541.0], [39.4, 541.0], [39.5, 542.0], [39.6, 543.0], [39.7, 543.0], [39.8, 543.0], [39.9, 543.0], [40.0, 543.0], [40.1, 543.0], [40.2, 544.0], [40.3, 544.0], [40.4, 544.0], [40.5, 544.0], [40.6, 545.0], [40.7, 545.0], [40.8, 545.0], [40.9, 545.0], [41.0, 545.0], [41.1, 546.0], [41.2, 546.0], [41.3, 546.0], [41.4, 546.0], [41.5, 546.0], [41.6, 546.0], [41.7, 547.0], [41.8, 547.0], [41.9, 547.0], [42.0, 547.0], [42.1, 547.0], [42.2, 548.0], [42.3, 548.0], [42.4, 549.0], [42.5, 549.0], [42.6, 549.0], [42.7, 549.0], [42.8, 549.0], [42.9, 549.0], [43.0, 549.0], [43.1, 549.0], [43.2, 550.0], [43.3, 550.0], [43.4, 550.0], [43.5, 550.0], [43.6, 551.0], [43.7, 551.0], [43.8, 551.0], [43.9, 551.0], [44.0, 551.0], [44.1, 552.0], [44.2, 552.0], [44.3, 552.0], [44.4, 552.0], [44.5, 553.0], [44.6, 553.0], [44.7, 553.0], [44.8, 553.0], [44.9, 553.0], [45.0, 553.0], [45.1, 553.0], [45.2, 554.0], [45.3, 554.0], [45.4, 554.0], [45.5, 554.0], [45.6, 554.0], [45.7, 554.0], [45.8, 554.0], [45.9, 554.0], [46.0, 555.0], [46.1, 555.0], [46.2, 555.0], [46.3, 556.0], [46.4, 557.0], [46.5, 557.0], [46.6, 557.0], [46.7, 557.0], [46.8, 557.0], [46.9, 557.0], [47.0, 558.0], [47.1, 558.0], [47.2, 558.0], [47.3, 558.0], [47.4, 559.0], [47.5, 560.0], [47.6, 560.0], [47.7, 560.0], [47.8, 560.0], [47.9, 560.0], [48.0, 560.0], [48.1, 560.0], [48.2, 561.0], [48.3, 561.0], [48.4, 561.0], [48.5, 561.0], [48.6, 563.0], [48.7, 563.0], [48.8, 563.0], [48.9, 563.0], [49.0, 564.0], [49.1, 564.0], [49.2, 564.0], [49.3, 564.0], [49.4, 565.0], [49.5, 565.0], [49.6, 565.0], [49.7, 565.0], [49.8, 565.0], [49.9, 565.0], [50.0, 566.0], [50.1, 566.0], [50.2, 566.0], [50.3, 566.0], [50.4, 566.0], [50.5, 567.0], [50.6, 567.0], [50.7, 568.0], [50.8, 568.0], [50.9, 568.0], [51.0, 568.0], [51.1, 568.0], [51.2, 569.0], [51.3, 569.0], [51.4, 569.0], [51.5, 571.0], [51.6, 571.0], [51.7, 571.0], [51.8, 571.0], [51.9, 571.0], [52.0, 572.0], [52.1, 572.0], [52.2, 573.0], [52.3, 573.0], [52.4, 575.0], [52.5, 575.0], [52.6, 576.0], [52.7, 577.0], [52.8, 578.0], [52.9, 578.0], [53.0, 578.0], [53.1, 578.0], [53.2, 579.0], [53.3, 579.0], [53.4, 580.0], [53.5, 580.0], [53.6, 580.0], [53.7, 580.0], [53.8, 582.0], [53.9, 583.0], [54.0, 583.0], [54.1, 584.0], [54.2, 585.0], [54.3, 587.0], [54.4, 587.0], [54.5, 589.0], [54.6, 589.0], [54.7, 591.0], [54.8, 591.0], [54.9, 592.0], [55.0, 593.0], [55.1, 593.0], [55.2, 594.0], [55.3, 594.0], [55.4, 597.0], [55.5, 597.0], [55.6, 598.0], [55.7, 598.0], [55.8, 598.0], [55.9, 598.0], [56.0, 599.0], [56.1, 599.0], [56.2, 599.0], [56.3, 599.0], [56.4, 600.0], [56.5, 600.0], [56.6, 601.0], [56.7, 601.0], [56.8, 603.0], [56.9, 604.0], [57.0, 604.0], [57.1, 604.0], [57.2, 605.0], [57.3, 606.0], [57.4, 606.0], [57.5, 608.0], [57.6, 608.0], [57.7, 612.0], [57.8, 612.0], [57.9, 612.0], [58.0, 613.0], [58.1, 613.0], [58.2, 613.0], [58.3, 614.0], [58.4, 615.0], [58.5, 615.0], [58.6, 616.0], [58.7, 617.0], [58.8, 617.0], [58.9, 617.0], [59.0, 617.0], [59.1, 617.0], [59.2, 617.0], [59.3, 617.0], [59.4, 619.0], [59.5, 621.0], [59.6, 622.0], [59.7, 622.0], [59.8, 625.0], [59.9, 625.0], [60.0, 627.0], [60.1, 627.0], [60.2, 629.0], [60.3, 629.0], [60.4, 629.0], [60.5, 630.0], [60.6, 631.0], [60.7, 632.0], [60.8, 632.0], [60.9, 632.0], [61.0, 632.0], [61.1, 633.0], [61.2, 633.0], [61.3, 633.0], [61.4, 636.0], [61.5, 636.0], [61.6, 636.0], [61.7, 637.0], [61.8, 640.0], [61.9, 640.0], [62.0, 640.0], [62.1, 641.0], [62.2, 644.0], [62.3, 644.0], [62.4, 644.0], [62.5, 646.0], [62.6, 646.0], [62.7, 646.0], [62.8, 647.0], [62.9, 648.0], [63.0, 648.0], [63.1, 648.0], [63.2, 650.0], [63.3, 651.0], [63.4, 651.0], [63.5, 652.0], [63.6, 653.0], [63.7, 653.0], [63.8, 653.0], [63.9, 660.0], [64.0, 662.0], [64.1, 664.0], [64.2, 664.0], [64.3, 665.0], [64.4, 665.0], [64.5, 665.0], [64.6, 665.0], [64.7, 668.0], [64.8, 668.0], [64.9, 672.0], [65.0, 672.0], [65.1, 674.0], [65.2, 675.0], [65.3, 675.0], [65.4, 677.0], [65.5, 678.0], [65.6, 678.0], [65.7, 678.0], [65.8, 679.0], [65.9, 679.0], [66.0, 681.0], [66.1, 681.0], [66.2, 682.0], [66.3, 683.0], [66.4, 683.0], [66.5, 683.0], [66.6, 684.0], [66.7, 684.0], [66.8, 684.0], [66.9, 684.0], [67.0, 685.0], [67.1, 686.0], [67.2, 686.0], [67.3, 686.0], [67.4, 687.0], [67.5, 688.0], [67.6, 688.0], [67.7, 688.0], [67.8, 690.0], [67.9, 691.0], [68.0, 691.0], [68.1, 691.0], [68.2, 691.0], [68.3, 692.0], [68.4, 692.0], [68.5, 693.0], [68.6, 693.0], [68.7, 693.0], [68.8, 693.0], [68.9, 695.0], [69.0, 695.0], [69.1, 695.0], [69.2, 695.0], [69.3, 696.0], [69.4, 697.0], [69.5, 697.0], [69.6, 697.0], [69.7, 697.0], [69.8, 697.0], [69.9, 697.0], [70.0, 699.0], [70.1, 699.0], [70.2, 699.0], [70.3, 700.0], [70.4, 700.0], [70.5, 701.0], [70.6, 701.0], [70.7, 702.0], [70.8, 702.0], [70.9, 703.0], [71.0, 703.0], [71.1, 704.0], [71.2, 704.0], [71.3, 704.0], [71.4, 704.0], [71.5, 705.0], [71.6, 705.0], [71.7, 705.0], [71.8, 706.0], [71.9, 706.0], [72.0, 706.0], [72.1, 706.0], [72.2, 707.0], [72.3, 707.0], [72.4, 707.0], [72.5, 707.0], [72.6, 708.0], [72.7, 708.0], [72.8, 708.0], [72.9, 708.0], [73.0, 709.0], [73.1, 710.0], [73.2, 711.0], [73.3, 711.0], [73.4, 712.0], [73.5, 712.0], [73.6, 712.0], [73.7, 712.0], [73.8, 713.0], [73.9, 713.0], [74.0, 713.0], [74.1, 715.0], [74.2, 716.0], [74.3, 716.0], [74.4, 716.0], [74.5, 716.0], [74.6, 716.0], [74.7, 716.0], [74.8, 716.0], [74.9, 716.0], [75.0, 716.0], [75.1, 716.0], [75.2, 716.0], [75.3, 716.0], [75.4, 717.0], [75.5, 717.0], [75.6, 717.0], [75.7, 717.0], [75.8, 717.0], [75.9, 717.0], [76.0, 718.0], [76.1, 718.0], [76.2, 720.0], [76.3, 720.0], [76.4, 720.0], [76.5, 722.0], [76.6, 723.0], [76.7, 723.0], [76.8, 724.0], [76.9, 725.0], [77.0, 725.0], [77.1, 727.0], [77.2, 727.0], [77.3, 730.0], [77.4, 730.0], [77.5, 730.0], [77.6, 731.0], [77.7, 732.0], [77.8, 732.0], [77.9, 732.0], [78.0, 733.0], [78.1, 733.0], [78.2, 733.0], [78.3, 735.0], [78.4, 735.0], [78.5, 735.0], [78.6, 735.0], [78.7, 736.0], [78.8, 739.0], [78.9, 739.0], [79.0, 740.0], [79.1, 741.0], [79.2, 742.0], [79.3, 742.0], [79.4, 743.0], [79.5, 744.0], [79.6, 745.0], [79.7, 745.0], [79.8, 745.0], [79.9, 752.0], [80.0, 753.0], [80.1, 753.0], [80.2, 754.0], [80.3, 756.0], [80.4, 756.0], [80.5, 758.0], [80.6, 759.0], [80.7, 759.0], [80.8, 759.0], [80.9, 759.0], [81.0, 760.0], [81.1, 762.0], [81.2, 762.0], [81.3, 764.0], [81.4, 766.0], [81.5, 766.0], [81.6, 766.0], [81.7, 771.0], [81.8, 771.0], [81.9, 771.0], [82.0, 773.0], [82.1, 773.0], [82.2, 775.0], [82.3, 775.0], [82.4, 778.0], [82.5, 779.0], [82.6, 779.0], [82.7, 779.0], [82.8, 779.0], [82.9, 785.0], [83.0, 785.0], [83.1, 785.0], [83.2, 786.0], [83.3, 787.0], [83.4, 787.0], [83.5, 789.0], [83.6, 789.0], [83.7, 791.0], [83.8, 791.0], [83.9, 792.0], [84.0, 794.0], [84.1, 795.0], [84.2, 795.0], [84.3, 797.0], [84.4, 798.0], [84.5, 798.0], [84.6, 798.0], [84.7, 798.0], [84.8, 799.0], [84.9, 803.0], [85.0, 803.0], [85.1, 804.0], [85.2, 805.0], [85.3, 805.0], [85.4, 806.0], [85.5, 809.0], [85.6, 809.0], [85.7, 809.0], [85.8, 810.0], [85.9, 810.0], [86.0, 812.0], [86.1, 812.0], [86.2, 813.0], [86.3, 814.0], [86.4, 816.0], [86.5, 816.0], [86.6, 817.0], [86.7, 817.0], [86.8, 817.0], [86.9, 818.0], [87.0, 821.0], [87.1, 822.0], [87.2, 822.0], [87.3, 824.0], [87.4, 824.0], [87.5, 825.0], [87.6, 825.0], [87.7, 825.0], [87.8, 826.0], [87.9, 826.0], [88.0, 826.0], [88.1, 827.0], [88.2, 829.0], [88.3, 830.0], [88.4, 830.0], [88.5, 830.0], [88.6, 831.0], [88.7, 831.0], [88.8, 831.0], [88.9, 831.0], [89.0, 832.0], [89.1, 832.0], [89.2, 832.0], [89.3, 833.0], [89.4, 834.0], [89.5, 834.0], [89.6, 834.0], [89.7, 834.0], [89.8, 835.0], [89.9, 835.0], [90.0, 837.0], [90.1, 840.0], [90.2, 840.0], [90.3, 841.0], [90.4, 842.0], [90.5, 844.0], [90.6, 844.0], [90.7, 848.0], [90.8, 848.0], [90.9, 851.0], [91.0, 851.0], [91.1, 853.0], [91.2, 856.0], [91.3, 860.0], [91.4, 860.0], [91.5, 860.0], [91.6, 861.0], [91.7, 861.0], [91.8, 862.0], [91.9, 862.0], [92.0, 864.0], [92.1, 864.0], [92.2, 865.0], [92.3, 865.0], [92.4, 866.0], [92.5, 866.0], [92.6, 867.0], [92.7, 874.0], [92.8, 881.0], [92.9, 881.0], [93.0, 887.0], [93.1, 896.0], [93.2, 898.0], [93.3, 898.0], [93.4, 902.0], [93.5, 904.0], [93.6, 904.0], [93.7, 909.0], [93.8, 931.0], [93.9, 947.0], [94.0, 947.0], [94.1, 955.0], [94.2, 962.0], [94.3, 962.0], [94.4, 962.0], [94.5, 969.0], [94.6, 970.0], [94.7, 988.0], [94.8, 988.0], [94.9, 992.0], [95.0, 993.0], [95.1, 993.0], [95.2, 997.0], [95.3, 998.0], [95.4, 1004.0], [95.5, 1004.0], [95.6, 1019.0], [95.7, 1024.0], [95.8, 1030.0], [95.9, 1030.0], [96.0, 1043.0], [96.1, 1081.0], [96.2, 1084.0], [96.3, 1084.0], [96.4, 1087.0], [96.5, 1102.0], [96.6, 1106.0], [96.7, 1106.0], [96.8, 1109.0], [96.9, 1113.0], [97.0, 1113.0], [97.1, 1114.0], [97.2, 1137.0], [97.3, 1151.0], [97.4, 1151.0], [97.5, 1160.0], [97.6, 1238.0], [97.7, 1260.0], [97.8, 1260.0], [97.9, 1288.0], [98.0, 1291.0], [98.1, 1302.0], [98.2, 1302.0], [98.3, 1340.0], [98.4, 1355.0], [98.5, 1355.0], [98.6, 1383.0], [98.7, 1387.0], [98.8, 1400.0], [98.9, 1400.0], [99.0, 1619.0], [99.1, 1779.0], [99.2, 1815.0], [99.3, 1815.0], [99.4, 1836.0], [99.5, 2686.0], [99.6, 2912.0], [99.7, 2912.0], [99.8, 3048.0], [99.9, 3214.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 152.0, "series": [{"data": [[600.0, 102.0], [2600.0, 1.0], [700.0, 108.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 86.0], [3200.0, 1.0], [800.0, 62.0], [900.0, 15.0], [1000.0, 8.0], [1100.0, 8.0], [300.0, 122.0], [1200.0, 4.0], [1300.0, 5.0], [1400.0, 1.0], [100.0, 7.0], [1600.0, 1.0], [400.0, 47.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 152.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 465.0, "series": [{"data": [[0.0, 262.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 465.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60439526E12, "maxY": 1.0, "series": [{"data": [[1.60439568E12, 1.0], [1.60439538E12, 1.0], [1.60439556E12, 1.0], [1.60439526E12, 1.0], [1.60439544E12, 1.0], [1.60439562E12, 1.0], [1.60439532E12, 1.0], [1.6043955E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439568E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 589.6693877551021, "minX": 1.0, "maxY": 589.6693877551021, "series": [{"data": [[1.0, 589.6693877551021]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 589.6693877551021]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 167.45, "minX": 1.60439526E12, "maxY": 338980.5333333333, "series": [{"data": [[1.60439568E12, 254014.68333333332], [1.60439538E12, 206318.76666666666], [1.60439556E12, 213443.35], [1.60439526E12, 117154.88333333333], [1.60439544E12, 192255.75], [1.60439562E12, 210758.46666666667], [1.60439532E12, 302866.0833333333], [1.6043955E12, 338980.5333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439568E12, 907.1666666666666], [1.60439538E12, 634.9833333333333], [1.60439556E12, 658.5833333333334], [1.60439526E12, 167.45], [1.60439544E12, 870.2], [1.60439562E12, 688.4166666666666], [1.60439532E12, 726.45], [1.6043955E12, 869.7833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439568E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 492.77868852458994, "minX": 1.60439526E12, "maxY": 709.8452380952384, "series": [{"data": [[1.60439568E12, 492.77868852458994], [1.60439538E12, 709.8452380952384], [1.60439556E12, 687.7471264367815], [1.60439526E12, 652.6818181818182], [1.60439544E12, 515.1034482758621], [1.60439562E12, 659.4175824175825], [1.60439532E12, 623.1666666666665], [1.6043955E12, 511.8376068376069]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439568E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 491.8442622950819, "minX": 1.60439526E12, "maxY": 708.5833333333334, "series": [{"data": [[1.60439568E12, 491.8442622950819], [1.60439538E12, 708.5833333333334], [1.60439556E12, 686.5977011494253], [1.60439526E12, 650.4999999999999], [1.60439544E12, 514.2931034482757], [1.60439562E12, 658.2967032967034], [1.60439532E12, 621.9791666666664], [1.6043955E12, 510.6581196581198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439568E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017094017094017096, "minX": 1.60439526E12, "maxY": 1.6363636363636365, "series": [{"data": [[1.60439568E12, 0.024590163934426236], [1.60439538E12, 0.02380952380952381], [1.60439556E12, 0.02298850574712644], [1.60439526E12, 1.6363636363636365], [1.60439544E12, 0.017241379310344827], [1.60439562E12, 0.021978021978021987], [1.60439532E12, 0.020833333333333336], [1.6043955E12, 0.017094017094017096]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439568E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.60439526E12, "maxY": 3214.0, "series": [{"data": [[1.60439568E12, 1836.0], [1.60439538E12, 2686.0], [1.60439556E12, 1114.0], [1.60439526E12, 3214.0], [1.60439544E12, 1779.0], [1.60439562E12, 998.0], [1.60439532E12, 2912.0], [1.6043955E12, 3048.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439568E12, 214.06999970674514], [1.60439538E12, 530.0], [1.60439556E12, 487.0], [1.60439526E12, 191.0], [1.60439544E12, 174.2119998884201], [1.60439562E12, 296.0], [1.60439532E12, 195.0], [1.6043955E12, 205.12399994373322]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439568E12, 215.17700011730193], [1.60439538E12, 530.0], [1.60439556E12, 487.0], [1.60439526E12, 191.0], [1.60439544E12, 174.63320004463196], [1.60439562E12, 296.0], [1.60439532E12, 195.0], [1.6043955E12, 205.33640002250672]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439568E12, 214.68499985337257], [1.60439538E12, 530.0], [1.60439556E12, 487.0], [1.60439526E12, 191.0], [1.60439544E12, 174.44599994421006], [1.60439562E12, 296.0], [1.60439532E12, 195.0], [1.6043955E12, 205.24199997186662]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439568E12, 213.0], [1.60439538E12, 530.0], [1.60439556E12, 487.0], [1.60439526E12, 191.0], [1.60439544E12, 174.0], [1.60439562E12, 296.0], [1.60439532E12, 195.0], [1.6043955E12, 205.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439568E12, 364.0], [1.60439538E12, 652.5], [1.60439556E12, 665.0], [1.60439526E12, 520.0], [1.60439544E12, 546.0], [1.60439562E12, 687.0], [1.60439532E12, 565.5], [1.6043955E12, 442.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 718.0, "series": [{"data": [[2.0, 581.5], [1.0, 718.0], [4.0, 291.5], [5.0, 205.0], [3.0, 328.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 716.0, "series": [{"data": [[2.0, 581.0], [1.0, 716.0], [4.0, 291.5], [5.0, 205.0], [3.0, 328.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60439526E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.60439568E12, 2.0166666666666666], [1.60439538E12, 1.4], [1.60439556E12, 1.45], [1.60439526E12, 0.38333333333333336], [1.60439544E12, 1.9333333333333333], [1.60439562E12, 1.5166666666666666], [1.60439532E12, 1.6], [1.6043955E12, 1.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439568E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60439526E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60439568E12, 2.033333333333333], [1.60439538E12, 1.4], [1.60439556E12, 1.45], [1.60439526E12, 0.36666666666666664], [1.60439544E12, 1.9333333333333333], [1.60439562E12, 1.5166666666666666], [1.60439532E12, 1.6], [1.6043955E12, 1.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439568E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60439526E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60439568E12, 2.033333333333333], [1.60439538E12, 1.4], [1.60439556E12, 1.45], [1.60439526E12, 0.36666666666666664], [1.60439544E12, 1.9333333333333333], [1.60439562E12, 1.5166666666666666], [1.60439532E12, 1.6], [1.6043955E12, 1.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439568E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.60439526E12, "maxY": 2.033333333333333, "series": [{"data": [[1.60439568E12, 2.033333333333333], [1.60439538E12, 1.4], [1.60439556E12, 1.45], [1.60439526E12, 0.36666666666666664], [1.60439544E12, 1.9333333333333333], [1.60439562E12, 1.5166666666666666], [1.60439532E12, 1.6], [1.6043955E12, 1.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439568E12, "title": "Total Transactions Per Second"}},
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

