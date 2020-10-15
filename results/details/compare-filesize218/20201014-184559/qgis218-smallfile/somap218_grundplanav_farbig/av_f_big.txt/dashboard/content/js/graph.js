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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 64074.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 217.0], [0.3, 224.0], [0.4, 224.0], [0.5, 225.0], [0.6, 226.0], [0.7, 228.0], [0.8, 228.0], [0.9, 229.0], [1.0, 230.0], [1.1, 230.0], [1.2, 230.0], [1.3, 232.0], [1.4, 232.0], [1.5, 233.0], [1.6, 233.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 235.0], [2.1, 235.0], [2.2, 236.0], [2.3, 236.0], [2.4, 237.0], [2.5, 238.0], [2.6, 239.0], [2.7, 239.0], [2.8, 240.0], [2.9, 241.0], [3.0, 242.0], [3.1, 242.0], [3.2, 242.0], [3.3, 246.0], [3.4, 246.0], [3.5, 247.0], [3.6, 248.0], [3.7, 253.0], [3.8, 253.0], [3.9, 254.0], [4.0, 260.0], [4.1, 261.0], [4.2, 261.0], [4.3, 262.0], [4.4, 267.0], [4.5, 268.0], [4.6, 268.0], [4.7, 268.0], [4.8, 269.0], [4.9, 269.0], [5.0, 269.0], [5.1, 271.0], [5.2, 271.0], [5.3, 271.0], [5.4, 274.0], [5.5, 277.0], [5.6, 277.0], [5.7, 277.0], [5.8, 281.0], [5.9, 290.0], [6.0, 292.0], [6.1, 292.0], [6.2, 292.0], [6.3, 293.0], [6.4, 297.0], [6.5, 297.0], [6.6, 298.0], [6.7, 302.0], [6.8, 302.0], [6.9, 303.0], [7.0, 308.0], [7.1, 312.0], [7.2, 312.0], [7.3, 315.0], [7.4, 316.0], [7.5, 317.0], [7.6, 317.0], [7.7, 320.0], [7.8, 320.0], [7.9, 324.0], [8.0, 324.0], [8.1, 330.0], [8.2, 331.0], [8.3, 337.0], [8.4, 337.0], [8.5, 339.0], [8.6, 339.0], [8.7, 339.0], [8.8, 342.0], [8.9, 344.0], [9.0, 344.0], [9.1, 344.0], [9.2, 346.0], [9.3, 347.0], [9.4, 348.0], [9.5, 348.0], [9.6, 350.0], [9.7, 350.0], [9.8, 351.0], [9.9, 351.0], [10.0, 351.0], [10.1, 352.0], [10.2, 352.0], [10.3, 352.0], [10.4, 353.0], [10.5, 353.0], [10.6, 353.0], [10.7, 354.0], [10.8, 354.0], [10.9, 357.0], [11.0, 357.0], [11.1, 357.0], [11.2, 358.0], [11.3, 360.0], [11.4, 360.0], [11.5, 361.0], [11.6, 364.0], [11.7, 364.0], [11.8, 365.0], [11.9, 365.0], [12.0, 365.0], [12.1, 365.0], [12.2, 365.0], [12.3, 366.0], [12.4, 367.0], [12.5, 367.0], [12.6, 367.0], [12.7, 368.0], [12.8, 369.0], [12.9, 369.0], [13.0, 369.0], [13.1, 369.0], [13.2, 370.0], [13.3, 370.0], [13.4, 370.0], [13.5, 370.0], [13.6, 370.0], [13.7, 372.0], [13.8, 373.0], [13.9, 374.0], [14.0, 374.0], [14.1, 374.0], [14.2, 374.0], [14.3, 377.0], [14.4, 377.0], [14.5, 377.0], [14.6, 378.0], [14.7, 378.0], [14.8, 378.0], [14.9, 378.0], [15.0, 379.0], [15.1, 379.0], [15.2, 380.0], [15.3, 380.0], [15.4, 381.0], [15.5, 381.0], [15.6, 382.0], [15.7, 383.0], [15.8, 384.0], [15.9, 384.0], [16.0, 385.0], [16.1, 385.0], [16.2, 385.0], [16.3, 385.0], [16.4, 386.0], [16.5, 386.0], [16.6, 386.0], [16.7, 386.0], [16.8, 386.0], [16.9, 387.0], [17.0, 387.0], [17.1, 388.0], [17.2, 388.0], [17.3, 389.0], [17.4, 389.0], [17.5, 390.0], [17.6, 390.0], [17.7, 392.0], [17.8, 392.0], [17.9, 392.0], [18.0, 392.0], [18.1, 392.0], [18.2, 392.0], [18.3, 392.0], [18.4, 393.0], [18.5, 393.0], [18.6, 393.0], [18.7, 393.0], [18.8, 394.0], [18.9, 394.0], [19.0, 394.0], [19.1, 395.0], [19.2, 395.0], [19.3, 395.0], [19.4, 395.0], [19.5, 395.0], [19.6, 396.0], [19.7, 396.0], [19.8, 396.0], [19.9, 397.0], [20.0, 397.0], [20.1, 397.0], [20.2, 397.0], [20.3, 398.0], [20.4, 398.0], [20.5, 399.0], [20.6, 399.0], [20.7, 400.0], [20.8, 400.0], [20.9, 401.0], [21.0, 403.0], [21.1, 404.0], [21.2, 404.0], [21.3, 405.0], [21.4, 405.0], [21.5, 406.0], [21.6, 406.0], [21.7, 406.0], [21.8, 407.0], [21.9, 407.0], [22.0, 407.0], [22.1, 408.0], [22.2, 408.0], [22.3, 408.0], [22.4, 409.0], [22.5, 409.0], [22.6, 409.0], [22.7, 409.0], [22.8, 409.0], [22.9, 410.0], [23.0, 410.0], [23.1, 410.0], [23.2, 411.0], [23.3, 412.0], [23.4, 412.0], [23.5, 413.0], [23.6, 413.0], [23.7, 413.0], [23.8, 413.0], [23.9, 414.0], [24.0, 415.0], [24.1, 416.0], [24.2, 416.0], [24.3, 416.0], [24.4, 417.0], [24.5, 417.0], [24.6, 417.0], [24.7, 417.0], [24.8, 417.0], [24.9, 418.0], [25.0, 418.0], [25.1, 419.0], [25.2, 419.0], [25.3, 419.0], [25.4, 419.0], [25.5, 420.0], [25.6, 421.0], [25.7, 421.0], [25.8, 421.0], [25.9, 422.0], [26.0, 422.0], [26.1, 422.0], [26.2, 422.0], [26.3, 423.0], [26.4, 423.0], [26.5, 423.0], [26.6, 423.0], [26.7, 424.0], [26.8, 424.0], [26.9, 424.0], [27.0, 424.0], [27.1, 425.0], [27.2, 425.0], [27.3, 425.0], [27.4, 425.0], [27.5, 425.0], [27.6, 425.0], [27.7, 426.0], [27.8, 426.0], [27.9, 427.0], [28.0, 427.0], [28.1, 428.0], [28.2, 428.0], [28.3, 428.0], [28.4, 428.0], [28.5, 428.0], [28.6, 429.0], [28.7, 429.0], [28.8, 429.0], [28.9, 429.0], [29.0, 429.0], [29.1, 429.0], [29.2, 430.0], [29.3, 430.0], [29.4, 431.0], [29.5, 431.0], [29.6, 431.0], [29.7, 432.0], [29.8, 432.0], [29.9, 432.0], [30.0, 432.0], [30.1, 432.0], [30.2, 432.0], [30.3, 432.0], [30.4, 434.0], [30.5, 434.0], [30.6, 434.0], [30.7, 434.0], [30.8, 434.0], [30.9, 435.0], [31.0, 435.0], [31.1, 435.0], [31.2, 435.0], [31.3, 436.0], [31.4, 436.0], [31.5, 436.0], [31.6, 436.0], [31.7, 436.0], [31.8, 437.0], [31.9, 438.0], [32.0, 438.0], [32.1, 438.0], [32.2, 438.0], [32.3, 439.0], [32.4, 439.0], [32.5, 439.0], [32.6, 439.0], [32.7, 440.0], [32.8, 440.0], [32.9, 440.0], [33.0, 441.0], [33.1, 441.0], [33.2, 441.0], [33.3, 441.0], [33.4, 441.0], [33.5, 442.0], [33.6, 442.0], [33.7, 443.0], [33.8, 443.0], [33.9, 444.0], [34.0, 444.0], [34.1, 444.0], [34.2, 447.0], [34.3, 447.0], [34.4, 447.0], [34.5, 447.0], [34.6, 448.0], [34.7, 448.0], [34.8, 448.0], [34.9, 449.0], [35.0, 450.0], [35.1, 450.0], [35.2, 450.0], [35.3, 451.0], [35.4, 453.0], [35.5, 453.0], [35.6, 453.0], [35.7, 453.0], [35.8, 455.0], [35.9, 455.0], [36.0, 455.0], [36.1, 456.0], [36.2, 456.0], [36.3, 456.0], [36.4, 457.0], [36.5, 458.0], [36.6, 459.0], [36.7, 459.0], [36.8, 460.0], [36.9, 462.0], [37.0, 462.0], [37.1, 462.0], [37.2, 463.0], [37.3, 463.0], [37.4, 463.0], [37.5, 463.0], [37.6, 463.0], [37.7, 463.0], [37.8, 463.0], [37.9, 464.0], [38.0, 465.0], [38.1, 466.0], [38.2, 466.0], [38.3, 467.0], [38.4, 467.0], [38.5, 467.0], [38.6, 468.0], [38.7, 468.0], [38.8, 468.0], [38.9, 468.0], [39.0, 468.0], [39.1, 468.0], [39.2, 469.0], [39.3, 469.0], [39.4, 469.0], [39.5, 469.0], [39.6, 469.0], [39.7, 469.0], [39.8, 470.0], [39.9, 470.0], [40.0, 472.0], [40.1, 472.0], [40.2, 472.0], [40.3, 472.0], [40.4, 472.0], [40.5, 472.0], [40.6, 473.0], [40.7, 474.0], [40.8, 474.0], [40.9, 474.0], [41.0, 474.0], [41.1, 474.0], [41.2, 474.0], [41.3, 474.0], [41.4, 475.0], [41.5, 476.0], [41.6, 476.0], [41.7, 477.0], [41.8, 477.0], [41.9, 477.0], [42.0, 478.0], [42.1, 479.0], [42.2, 479.0], [42.3, 479.0], [42.4, 479.0], [42.5, 479.0], [42.6, 479.0], [42.7, 479.0], [42.8, 479.0], [42.9, 480.0], [43.0, 481.0], [43.1, 481.0], [43.2, 481.0], [43.3, 481.0], [43.4, 481.0], [43.5, 482.0], [43.6, 482.0], [43.7, 482.0], [43.8, 482.0], [43.9, 483.0], [44.0, 483.0], [44.1, 484.0], [44.2, 484.0], [44.3, 486.0], [44.4, 486.0], [44.5, 486.0], [44.6, 486.0], [44.7, 486.0], [44.8, 487.0], [44.9, 487.0], [45.0, 487.0], [45.1, 488.0], [45.2, 489.0], [45.3, 489.0], [45.4, 491.0], [45.5, 493.0], [45.6, 495.0], [45.7, 495.0], [45.8, 495.0], [45.9, 496.0], [46.0, 496.0], [46.1, 496.0], [46.2, 497.0], [46.3, 498.0], [46.4, 499.0], [46.5, 499.0], [46.6, 500.0], [46.7, 500.0], [46.8, 500.0], [46.9, 500.0], [47.0, 501.0], [47.1, 501.0], [47.2, 501.0], [47.3, 501.0], [47.4, 503.0], [47.5, 504.0], [47.6, 504.0], [47.7, 505.0], [47.8, 505.0], [47.9, 505.0], [48.0, 505.0], [48.1, 507.0], [48.2, 508.0], [48.3, 508.0], [48.4, 508.0], [48.5, 510.0], [48.6, 510.0], [48.7, 510.0], [48.8, 512.0], [48.9, 513.0], [49.0, 514.0], [49.1, 514.0], [49.2, 514.0], [49.3, 515.0], [49.4, 515.0], [49.5, 515.0], [49.6, 517.0], [49.7, 518.0], [49.8, 519.0], [49.9, 519.0], [50.0, 521.0], [50.1, 522.0], [50.2, 522.0], [50.3, 523.0], [50.4, 525.0], [50.5, 527.0], [50.6, 527.0], [50.7, 532.0], [50.8, 535.0], [50.9, 538.0], [51.0, 538.0], [51.1, 538.0], [51.2, 539.0], [51.3, 541.0], [51.4, 541.0], [51.5, 542.0], [51.6, 546.0], [51.7, 546.0], [51.8, 548.0], [51.9, 556.0], [52.0, 558.0], [52.1, 558.0], [52.2, 559.0], [52.3, 560.0], [52.4, 563.0], [52.5, 563.0], [52.6, 565.0], [52.7, 566.0], [52.8, 569.0], [52.9, 569.0], [53.0, 569.0], [53.1, 569.0], [53.2, 570.0], [53.3, 570.0], [53.4, 571.0], [53.5, 572.0], [53.6, 572.0], [53.7, 573.0], [53.8, 573.0], [53.9, 574.0], [54.0, 574.0], [54.1, 575.0], [54.2, 576.0], [54.3, 582.0], [54.4, 582.0], [54.5, 583.0], [54.6, 583.0], [54.7, 586.0], [54.8, 586.0], [54.9, 587.0], [55.0, 588.0], [55.1, 588.0], [55.2, 589.0], [55.3, 593.0], [55.4, 593.0], [55.5, 593.0], [55.6, 597.0], [55.7, 597.0], [55.8, 597.0], [55.9, 597.0], [56.0, 599.0], [56.1, 600.0], [56.2, 604.0], [56.3, 604.0], [56.4, 605.0], [56.5, 605.0], [56.6, 605.0], [56.7, 605.0], [56.8, 605.0], [56.9, 606.0], [57.0, 606.0], [57.1, 606.0], [57.2, 610.0], [57.3, 612.0], [57.4, 612.0], [57.5, 616.0], [57.6, 616.0], [57.7, 619.0], [57.8, 619.0], [57.9, 622.0], [58.0, 624.0], [58.1, 626.0], [58.2, 626.0], [58.3, 626.0], [58.4, 631.0], [58.5, 631.0], [58.6, 632.0], [58.7, 634.0], [58.8, 638.0], [58.9, 638.0], [59.0, 638.0], [59.1, 638.0], [59.2, 638.0], [59.3, 638.0], [59.4, 638.0], [59.5, 639.0], [59.6, 639.0], [59.7, 639.0], [59.8, 644.0], [59.9, 644.0], [60.0, 645.0], [60.1, 645.0], [60.2, 649.0], [60.3, 649.0], [60.4, 649.0], [60.5, 651.0], [60.6, 655.0], [60.7, 660.0], [60.8, 660.0], [60.9, 662.0], [61.0, 667.0], [61.1, 669.0], [61.2, 669.0], [61.3, 677.0], [61.4, 677.0], [61.5, 679.0], [61.6, 679.0], [61.7, 685.0], [61.8, 686.0], [61.9, 686.0], [62.0, 687.0], [62.1, 694.0], [62.2, 698.0], [62.3, 698.0], [62.4, 699.0], [62.5, 702.0], [62.6, 705.0], [62.7, 705.0], [62.8, 709.0], [62.9, 711.0], [63.0, 712.0], [63.1, 712.0], [63.2, 714.0], [63.3, 715.0], [63.4, 715.0], [63.5, 724.0], [63.6, 724.0], [63.7, 724.0], [63.8, 724.0], [63.9, 725.0], [64.0, 730.0], [64.1, 730.0], [64.2, 730.0], [64.3, 731.0], [64.4, 732.0], [64.5, 732.0], [64.6, 732.0], [64.7, 736.0], [64.8, 744.0], [64.9, 749.0], [65.0, 749.0], [65.1, 753.0], [65.2, 754.0], [65.3, 754.0], [65.4, 756.0], [65.5, 757.0], [65.6, 760.0], [65.7, 760.0], [65.8, 762.0], [65.9, 763.0], [66.0, 764.0], [66.1, 764.0], [66.2, 764.0], [66.3, 767.0], [66.4, 767.0], [66.5, 767.0], [66.6, 771.0], [66.7, 776.0], [66.8, 776.0], [66.9, 777.0], [67.0, 777.0], [67.1, 777.0], [67.2, 777.0], [67.3, 782.0], [67.4, 783.0], [67.5, 784.0], [67.6, 784.0], [67.7, 786.0], [67.8, 787.0], [67.9, 792.0], [68.0, 792.0], [68.1, 801.0], [68.2, 802.0], [68.3, 802.0], [68.4, 802.0], [68.5, 808.0], [68.6, 809.0], [68.7, 809.0], [68.8, 809.0], [68.9, 810.0], [69.0, 813.0], [69.1, 813.0], [69.2, 815.0], [69.3, 815.0], [69.4, 815.0], [69.5, 815.0], [69.6, 817.0], [69.7, 821.0], [69.8, 822.0], [69.9, 822.0], [70.0, 823.0], [70.1, 824.0], [70.2, 824.0], [70.3, 824.0], [70.4, 826.0], [70.5, 826.0], [70.6, 826.0], [70.7, 828.0], [70.8, 828.0], [70.9, 833.0], [71.0, 833.0], [71.1, 835.0], [71.2, 835.0], [71.3, 840.0], [71.4, 840.0], [71.5, 841.0], [71.6, 844.0], [71.7, 844.0], [71.8, 844.0], [71.9, 844.0], [72.0, 845.0], [72.1, 845.0], [72.2, 845.0], [72.3, 846.0], [72.4, 848.0], [72.5, 848.0], [72.6, 850.0], [72.7, 851.0], [72.8, 852.0], [72.9, 852.0], [73.0, 853.0], [73.1, 855.0], [73.2, 855.0], [73.3, 855.0], [73.4, 859.0], [73.5, 861.0], [73.6, 861.0], [73.7, 866.0], [73.8, 867.0], [73.9, 868.0], [74.0, 868.0], [74.1, 868.0], [74.2, 871.0], [74.3, 872.0], [74.4, 872.0], [74.5, 872.0], [74.6, 873.0], [74.7, 874.0], [74.8, 874.0], [74.9, 874.0], [75.0, 874.0], [75.1, 874.0], [75.2, 875.0], [75.3, 875.0], [75.4, 876.0], [75.5, 876.0], [75.6, 876.0], [75.7, 877.0], [75.8, 879.0], [75.9, 879.0], [76.0, 879.0], [76.1, 882.0], [76.2, 884.0], [76.3, 884.0], [76.4, 885.0], [76.5, 887.0], [76.6, 889.0], [76.7, 889.0], [76.8, 890.0], [76.9, 892.0], [77.0, 892.0], [77.1, 893.0], [77.2, 894.0], [77.3, 900.0], [77.4, 900.0], [77.5, 900.0], [77.6, 901.0], [77.7, 901.0], [77.8, 901.0], [77.9, 901.0], [78.0, 902.0], [78.1, 903.0], [78.2, 903.0], [78.3, 905.0], [78.4, 908.0], [78.5, 908.0], [78.6, 910.0], [78.7, 912.0], [78.8, 914.0], [78.9, 914.0], [79.0, 917.0], [79.1, 921.0], [79.2, 929.0], [79.3, 929.0], [79.4, 933.0], [79.5, 940.0], [79.6, 944.0], [79.7, 944.0], [79.8, 945.0], [79.9, 953.0], [80.0, 955.0], [80.1, 955.0], [80.2, 967.0], [80.3, 967.0], [80.4, 967.0], [80.5, 971.0], [80.6, 976.0], [80.7, 977.0], [80.8, 977.0], [80.9, 977.0], [81.0, 979.0], [81.1, 982.0], [81.2, 982.0], [81.3, 983.0], [81.4, 988.0], [81.5, 990.0], [81.6, 990.0], [81.7, 992.0], [81.8, 993.0], [81.9, 993.0], [82.0, 995.0], [82.1, 1005.0], [82.2, 1026.0], [82.3, 1026.0], [82.4, 1028.0], [82.5, 1029.0], [82.6, 1035.0], [82.7, 1035.0], [82.8, 1044.0], [82.9, 1061.0], [83.0, 1063.0], [83.1, 1063.0], [83.2, 1082.0], [83.3, 1083.0], [83.4, 1083.0], [83.5, 1088.0], [83.6, 1090.0], [83.7, 1100.0], [83.8, 1100.0], [83.9, 1112.0], [84.0, 1115.0], [84.1, 1122.0], [84.2, 1122.0], [84.3, 1125.0], [84.4, 1136.0], [84.5, 1140.0], [84.6, 1140.0], [84.7, 1141.0], [84.8, 1144.0], [84.9, 1144.0], [85.0, 1144.0], [85.1, 1150.0], [85.2, 1153.0], [85.3, 1153.0], [85.4, 1155.0], [85.5, 1157.0], [85.6, 1165.0], [85.7, 1165.0], [85.8, 1169.0], [85.9, 1173.0], [86.0, 1176.0], [86.1, 1176.0], [86.2, 1177.0], [86.3, 1183.0], [86.4, 1183.0], [86.5, 1183.0], [86.6, 1184.0], [86.7, 1184.0], [86.8, 1184.0], [86.9, 1187.0], [87.0, 1187.0], [87.1, 1188.0], [87.2, 1188.0], [87.3, 1190.0], [87.4, 1201.0], [87.5, 1201.0], [87.6, 1201.0], [87.7, 1210.0], [87.8, 1212.0], [87.9, 1214.0], [88.0, 1214.0], [88.1, 1215.0], [88.2, 1215.0], [88.3, 1219.0], [88.4, 1219.0], [88.5, 1219.0], [88.6, 1227.0], [88.7, 1227.0], [88.8, 1233.0], [88.9, 1238.0], [89.0, 1240.0], [89.1, 1240.0], [89.2, 1249.0], [89.3, 1252.0], [89.4, 1253.0], [89.5, 1253.0], [89.6, 1256.0], [89.7, 1264.0], [89.8, 1265.0], [89.9, 1265.0], [90.0, 1268.0], [90.1, 1275.0], [90.2, 1275.0], [90.3, 1282.0], [90.4, 1287.0], [90.5, 1291.0], [90.6, 1291.0], [90.7, 1294.0], [90.8, 1296.0], [90.9, 1298.0], [91.0, 1298.0], [91.1, 1301.0], [91.2, 1302.0], [91.3, 1312.0], [91.4, 1312.0], [91.5, 1313.0], [91.6, 1316.0], [91.7, 1316.0], [91.8, 1318.0], [91.9, 1319.0], [92.0, 1322.0], [92.1, 1322.0], [92.2, 1326.0], [92.3, 1335.0], [92.4, 1337.0], [92.5, 1337.0], [92.6, 1346.0], [92.7, 1347.0], [92.8, 1348.0], [92.9, 1348.0], [93.0, 1351.0], [93.1, 1352.0], [93.2, 1360.0], [93.3, 1360.0], [93.4, 1377.0], [93.5, 1381.0], [93.6, 1381.0], [93.7, 1384.0], [93.8, 1387.0], [93.9, 1393.0], [94.0, 1393.0], [94.1, 1400.0], [94.2, 1409.0], [94.3, 1412.0], [94.4, 1412.0], [94.5, 1430.0], [94.6, 1442.0], [94.7, 1449.0], [94.8, 1449.0], [94.9, 1480.0], [95.0, 1535.0], [95.1, 1535.0], [95.2, 1558.0], [95.3, 1561.0], [95.4, 1568.0], [95.5, 1568.0], [95.6, 1577.0], [95.7, 1610.0], [95.8, 1638.0], [95.9, 1638.0], [96.0, 1645.0], [96.1, 1658.0], [96.2, 1690.0], [96.3, 1690.0], [96.4, 1702.0], [96.5, 1741.0], [96.6, 1755.0], [96.7, 1755.0], [96.8, 1771.0], [96.9, 1844.0], [97.0, 1844.0], [97.1, 1923.0], [97.2, 1947.0], [97.3, 1981.0], [97.4, 1981.0], [97.5, 1998.0], [97.6, 2047.0], [97.7, 2050.0], [97.8, 2050.0], [97.9, 2063.0], [98.0, 2084.0], [98.1, 2193.0], [98.2, 2193.0], [98.3, 2261.0], [98.4, 2269.0], [98.5, 2269.0], [98.6, 2429.0], [98.7, 2500.0], [98.8, 2747.0], [98.9, 2747.0], [99.0, 3945.0], [99.1, 4122.0], [99.2, 4229.0], [99.3, 4229.0], [99.4, 7160.0], [99.5, 7265.0], [99.6, 28412.0], [99.7, 28412.0], [99.8, 37318.0], [99.9, 64074.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 190.0, "series": [{"data": [[600.0, 47.0], [700.0, 41.0], [800.0, 68.0], [900.0, 35.0], [1000.0, 12.0], [1100.0, 27.0], [1200.0, 27.0], [1300.0, 22.0], [1400.0, 7.0], [1500.0, 5.0], [1600.0, 5.0], [1700.0, 4.0], [28400.0, 1.0], [1800.0, 1.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 1.0], [2200.0, 2.0], [37300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 1.0], [200.0, 49.0], [3900.0, 1.0], [64000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [300.0, 103.0], [400.0, 190.0], [7100.0, 1.0], [7200.0, 1.0], [500.0, 70.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 353.0, "series": [{"data": [[0.0, 345.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 353.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 36.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.749999999999998, "minX": 1.60270224E12, "maxY": 10.0, "series": [{"data": [[1.60270224E12, 10.0], [1.60270236E12, 8.749999999999998], [1.6027023E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 28412.0, "series": [{"data": [[8.0, 429.0], [4.0, 876.0], [2.0, 28412.0], [1.0, 1480.0], [9.0, 456.0], [10.0, 850.5151515151521], [5.0, 444.0], [6.0, 393.0], [3.0, 1412.0], [7.0, 2500.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 889.6272108843542]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 182.41666666666666, "minX": 1.60270224E12, "maxY": 1956904.7833333334, "series": [{"data": [[1.60270224E12, 93336.03333333334], [1.60270236E12, 137562.13333333333], [1.6027023E12, 1956904.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60270224E12, 182.41666666666666], [1.60270236E12, 261.18333333333334], [1.6027023E12, 5079.433333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 759.3644444444442, "minX": 1.60270224E12, "maxY": 3377.416666666666, "series": [{"data": [[1.60270224E12, 821.5833333333333], [1.60270236E12, 3377.416666666666], [1.6027023E12, 759.3644444444442]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 758.482962962963, "minX": 1.60270224E12, "maxY": 3376.250000000001, "series": [{"data": [[1.60270224E12, 820.5], [1.60270236E12, 3376.250000000001], [1.6027023E12, 758.482962962963]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011851851851851851, "minX": 1.60270224E12, "maxY": 3.5, "series": [{"data": [[1.60270224E12, 3.5], [1.60270236E12, 0.08333333333333333], [1.6027023E12, 0.011851851851851851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.60270224E12, "maxY": 37318.0, "series": [{"data": [[1.60270224E12, 1645.0], [1.60270236E12, 28412.0], [1.6027023E12, 37318.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60270224E12, 240.0], [1.60270236E12, 348.0], [1.6027023E12, 228.08399983882904]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60270224E12, 240.0], [1.60270236E12, 348.0], [1.6027023E12, 228.6924000644684]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60270224E12, 240.0], [1.60270236E12, 348.0], [1.6027023E12, 228.42199991941453]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60270224E12, 240.0], [1.60270236E12, 348.0], [1.6027023E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60270224E12, 664.5], [1.60270236E12, 444.0], [1.6027023E12, 522.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 277.0, "minX": 1.0, "maxY": 64074.0, "series": [{"data": [[2.0, 945.0], [8.0, 636.5], [9.0, 769.0], [10.0, 614.5], [11.0, 639.0], [3.0, 983.0], [12.0, 696.0], [13.0, 518.0], [14.0, 425.0], [15.0, 470.0], [4.0, 820.0], [16.0, 438.0], [1.0, 1480.0], [17.0, 277.0], [18.0, 432.0], [19.0, 378.0], [5.0, 809.0], [21.0, 392.0], [6.0, 1139.5], [7.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 64074.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 277.0, "minX": 1.0, "maxY": 64073.0, "series": [{"data": [[2.0, 943.5], [8.0, 635.5], [9.0, 768.0], [10.0, 613.5], [11.0, 638.0], [3.0, 979.0], [12.0, 695.0], [13.0, 518.0], [14.0, 425.0], [15.0, 469.0], [4.0, 812.5], [16.0, 437.0], [1.0, 1479.0], [17.0, 277.0], [18.0, 432.0], [19.0, 378.0], [5.0, 809.0], [21.0, 391.5], [6.0, 1136.5], [7.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 64073.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60270224E12, "maxY": 11.25, "series": [{"data": [[1.60270224E12, 0.5666666666666667], [1.60270236E12, 0.43333333333333335], [1.6027023E12, 11.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270224E12, "maxY": 11.25, "series": [{"data": [[1.60270224E12, 0.4], [1.60270236E12, 0.5833333333333334], [1.6027023E12, 11.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60270236E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270224E12, "maxY": 11.25, "series": [{"data": [[1.60270224E12, 0.4], [1.60270236E12, 0.5833333333333334], [1.6027023E12, 11.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60270236E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270224E12, "maxY": 11.25, "series": [{"data": [[1.60270224E12, 0.4], [1.60270236E12, 0.5833333333333334], [1.6027023E12, 11.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60270236E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270236E12, "title": "Total Transactions Per Second"}},
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

