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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 40515.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 220.0], [0.3, 221.0], [0.4, 221.0], [0.5, 222.0], [0.6, 223.0], [0.7, 227.0], [0.8, 227.0], [0.9, 229.0], [1.0, 229.0], [1.1, 229.0], [1.2, 229.0], [1.3, 229.0], [1.4, 231.0], [1.5, 232.0], [1.6, 232.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 237.0], [2.1, 237.0], [2.2, 238.0], [2.3, 238.0], [2.4, 241.0], [2.5, 243.0], [2.6, 251.0], [2.7, 251.0], [2.8, 251.0], [2.9, 253.0], [3.0, 253.0], [3.1, 253.0], [3.2, 258.0], [3.3, 259.0], [3.4, 259.0], [3.5, 262.0], [3.6, 263.0], [3.7, 265.0], [3.8, 265.0], [3.9, 265.0], [4.0, 267.0], [4.1, 268.0], [4.2, 268.0], [4.3, 269.0], [4.4, 271.0], [4.5, 271.0], [4.6, 271.0], [4.7, 274.0], [4.8, 274.0], [4.9, 276.0], [5.0, 276.0], [5.1, 277.0], [5.2, 279.0], [5.3, 279.0], [5.4, 280.0], [5.5, 281.0], [5.6, 284.0], [5.7, 284.0], [5.8, 285.0], [5.9, 287.0], [6.0, 292.0], [6.1, 292.0], [6.2, 293.0], [6.3, 293.0], [6.4, 295.0], [6.5, 295.0], [6.6, 301.0], [6.7, 310.0], [6.8, 310.0], [6.9, 315.0], [7.0, 319.0], [7.1, 321.0], [7.2, 321.0], [7.3, 324.0], [7.4, 326.0], [7.5, 331.0], [7.6, 331.0], [7.7, 341.0], [7.8, 343.0], [7.9, 344.0], [8.0, 344.0], [8.1, 344.0], [8.2, 344.0], [8.3, 345.0], [8.4, 345.0], [8.5, 346.0], [8.6, 346.0], [8.7, 346.0], [8.8, 346.0], [8.9, 349.0], [9.0, 354.0], [9.1, 354.0], [9.2, 354.0], [9.3, 355.0], [9.4, 355.0], [9.5, 355.0], [9.6, 355.0], [9.7, 356.0], [9.8, 357.0], [9.9, 357.0], [10.0, 358.0], [10.1, 359.0], [10.2, 359.0], [10.3, 360.0], [10.4, 360.0], [10.5, 361.0], [10.6, 361.0], [10.7, 361.0], [10.8, 364.0], [10.9, 364.0], [11.0, 364.0], [11.1, 364.0], [11.2, 365.0], [11.3, 366.0], [11.4, 366.0], [11.5, 366.0], [11.6, 366.0], [11.7, 366.0], [11.8, 367.0], [11.9, 367.0], [12.0, 368.0], [12.1, 368.0], [12.2, 370.0], [12.3, 371.0], [12.4, 371.0], [12.5, 371.0], [12.6, 372.0], [12.7, 372.0], [12.8, 372.0], [12.9, 372.0], [13.0, 372.0], [13.1, 373.0], [13.2, 373.0], [13.3, 373.0], [13.4, 375.0], [13.5, 375.0], [13.6, 375.0], [13.7, 376.0], [13.8, 376.0], [13.9, 377.0], [14.0, 377.0], [14.1, 378.0], [14.2, 378.0], [14.3, 379.0], [14.4, 379.0], [14.5, 379.0], [14.6, 380.0], [14.7, 382.0], [14.8, 382.0], [14.9, 383.0], [15.0, 384.0], [15.1, 384.0], [15.2, 384.0], [15.3, 385.0], [15.4, 385.0], [15.5, 385.0], [15.6, 385.0], [15.7, 386.0], [15.8, 388.0], [15.9, 388.0], [16.0, 388.0], [16.1, 388.0], [16.2, 389.0], [16.3, 389.0], [16.4, 389.0], [16.5, 390.0], [16.6, 391.0], [16.7, 391.0], [16.8, 391.0], [16.9, 391.0], [17.0, 391.0], [17.1, 392.0], [17.2, 393.0], [17.3, 393.0], [17.4, 393.0], [17.5, 393.0], [17.6, 394.0], [17.7, 395.0], [17.8, 395.0], [17.9, 396.0], [18.0, 396.0], [18.1, 396.0], [18.2, 396.0], [18.3, 396.0], [18.4, 397.0], [18.5, 397.0], [18.6, 398.0], [18.7, 398.0], [18.8, 398.0], [18.9, 398.0], [19.0, 399.0], [19.1, 399.0], [19.2, 400.0], [19.3, 400.0], [19.4, 400.0], [19.5, 401.0], [19.6, 401.0], [19.7, 401.0], [19.8, 401.0], [19.9, 403.0], [20.0, 404.0], [20.1, 404.0], [20.2, 404.0], [20.3, 405.0], [20.4, 405.0], [20.5, 405.0], [20.6, 406.0], [20.7, 406.0], [20.8, 406.0], [20.9, 406.0], [21.0, 407.0], [21.1, 408.0], [21.2, 408.0], [21.3, 408.0], [21.4, 408.0], [21.5, 408.0], [21.6, 408.0], [21.7, 409.0], [21.8, 409.0], [21.9, 409.0], [22.0, 409.0], [22.1, 409.0], [22.2, 411.0], [22.3, 411.0], [22.4, 413.0], [22.5, 414.0], [22.6, 414.0], [22.7, 414.0], [22.8, 414.0], [22.9, 415.0], [23.0, 416.0], [23.1, 416.0], [23.2, 417.0], [23.3, 417.0], [23.4, 417.0], [23.5, 417.0], [23.6, 417.0], [23.7, 419.0], [23.8, 419.0], [23.9, 419.0], [24.0, 420.0], [24.1, 420.0], [24.2, 420.0], [24.3, 420.0], [24.4, 420.0], [24.5, 421.0], [24.6, 421.0], [24.7, 422.0], [24.8, 422.0], [24.9, 424.0], [25.0, 424.0], [25.1, 424.0], [25.2, 424.0], [25.3, 424.0], [25.4, 424.0], [25.5, 424.0], [25.6, 425.0], [25.7, 425.0], [25.8, 426.0], [25.9, 427.0], [26.0, 427.0], [26.1, 427.0], [26.2, 428.0], [26.3, 428.0], [26.4, 428.0], [26.5, 428.0], [26.6, 429.0], [26.7, 430.0], [26.8, 430.0], [26.9, 431.0], [27.0, 431.0], [27.1, 431.0], [27.2, 431.0], [27.3, 432.0], [27.4, 432.0], [27.5, 432.0], [27.6, 432.0], [27.7, 433.0], [27.8, 433.0], [27.9, 434.0], [28.0, 434.0], [28.1, 435.0], [28.2, 435.0], [28.3, 436.0], [28.4, 436.0], [28.5, 436.0], [28.6, 436.0], [28.7, 436.0], [28.8, 436.0], [28.9, 436.0], [29.0, 437.0], [29.1, 437.0], [29.2, 438.0], [29.3, 438.0], [29.4, 438.0], [29.5, 438.0], [29.6, 438.0], [29.7, 439.0], [29.8, 439.0], [29.9, 439.0], [30.0, 439.0], [30.1, 439.0], [30.2, 439.0], [30.3, 439.0], [30.4, 440.0], [30.5, 440.0], [30.6, 440.0], [30.7, 441.0], [30.8, 442.0], [30.9, 442.0], [31.0, 442.0], [31.1, 443.0], [31.2, 443.0], [31.3, 443.0], [31.4, 443.0], [31.5, 444.0], [31.6, 445.0], [31.7, 445.0], [31.8, 446.0], [31.9, 446.0], [32.0, 447.0], [32.1, 447.0], [32.2, 447.0], [32.3, 449.0], [32.4, 449.0], [32.5, 449.0], [32.6, 449.0], [32.7, 451.0], [32.8, 452.0], [32.9, 452.0], [33.0, 452.0], [33.1, 452.0], [33.2, 452.0], [33.3, 452.0], [33.4, 452.0], [33.5, 452.0], [33.6, 452.0], [33.7, 453.0], [33.8, 453.0], [33.9, 453.0], [34.0, 453.0], [34.1, 453.0], [34.2, 454.0], [34.3, 455.0], [34.4, 455.0], [34.5, 456.0], [34.6, 456.0], [34.7, 457.0], [34.8, 457.0], [34.9, 457.0], [35.0, 457.0], [35.1, 457.0], [35.2, 457.0], [35.3, 459.0], [35.4, 461.0], [35.5, 461.0], [35.6, 461.0], [35.7, 461.0], [35.8, 462.0], [35.9, 462.0], [36.0, 463.0], [36.1, 463.0], [36.2, 464.0], [36.3, 464.0], [36.4, 466.0], [36.5, 466.0], [36.6, 466.0], [36.7, 466.0], [36.8, 467.0], [36.9, 468.0], [37.0, 468.0], [37.1, 469.0], [37.2, 469.0], [37.3, 472.0], [37.4, 472.0], [37.5, 473.0], [37.6, 474.0], [37.7, 474.0], [37.8, 474.0], [37.9, 474.0], [38.0, 475.0], [38.1, 475.0], [38.2, 475.0], [38.3, 475.0], [38.4, 476.0], [38.5, 476.0], [38.6, 476.0], [38.7, 479.0], [38.8, 480.0], [38.9, 480.0], [39.0, 481.0], [39.1, 482.0], [39.2, 482.0], [39.3, 482.0], [39.4, 486.0], [39.5, 488.0], [39.6, 488.0], [39.7, 488.0], [39.8, 489.0], [39.9, 489.0], [40.0, 490.0], [40.1, 490.0], [40.2, 491.0], [40.3, 491.0], [40.4, 491.0], [40.5, 492.0], [40.6, 493.0], [40.7, 495.0], [40.8, 495.0], [40.9, 495.0], [41.0, 496.0], [41.1, 496.0], [41.2, 496.0], [41.3, 496.0], [41.4, 498.0], [41.5, 498.0], [41.6, 498.0], [41.7, 498.0], [41.8, 500.0], [41.9, 500.0], [42.0, 500.0], [42.1, 501.0], [42.2, 502.0], [42.3, 502.0], [42.4, 502.0], [42.5, 503.0], [42.6, 503.0], [42.7, 503.0], [42.8, 504.0], [42.9, 504.0], [43.0, 505.0], [43.1, 505.0], [43.2, 505.0], [43.3, 505.0], [43.4, 505.0], [43.5, 507.0], [43.6, 509.0], [43.7, 509.0], [43.8, 509.0], [43.9, 511.0], [44.0, 512.0], [44.1, 512.0], [44.2, 512.0], [44.3, 513.0], [44.4, 515.0], [44.5, 515.0], [44.6, 515.0], [44.7, 519.0], [44.8, 519.0], [44.9, 521.0], [45.0, 521.0], [45.1, 522.0], [45.2, 523.0], [45.3, 523.0], [45.4, 523.0], [45.5, 524.0], [45.6, 525.0], [45.7, 525.0], [45.8, 525.0], [45.9, 525.0], [46.0, 526.0], [46.1, 526.0], [46.2, 526.0], [46.3, 526.0], [46.4, 528.0], [46.5, 528.0], [46.6, 530.0], [46.7, 531.0], [46.8, 531.0], [46.9, 531.0], [47.0, 532.0], [47.1, 532.0], [47.2, 532.0], [47.3, 533.0], [47.4, 535.0], [47.5, 536.0], [47.6, 536.0], [47.7, 536.0], [47.8, 537.0], [47.9, 537.0], [48.0, 537.0], [48.1, 539.0], [48.2, 540.0], [48.3, 542.0], [48.4, 542.0], [48.5, 544.0], [48.6, 545.0], [48.7, 545.0], [48.8, 545.0], [48.9, 545.0], [49.0, 546.0], [49.1, 546.0], [49.2, 546.0], [49.3, 546.0], [49.4, 547.0], [49.5, 547.0], [49.6, 551.0], [49.7, 552.0], [49.8, 553.0], [49.9, 553.0], [50.0, 553.0], [50.1, 555.0], [50.2, 555.0], [50.3, 555.0], [50.4, 555.0], [50.5, 556.0], [50.6, 556.0], [50.7, 556.0], [50.8, 557.0], [50.9, 558.0], [51.0, 558.0], [51.1, 558.0], [51.2, 559.0], [51.3, 559.0], [51.4, 559.0], [51.5, 567.0], [51.6, 571.0], [51.7, 571.0], [51.8, 571.0], [51.9, 571.0], [52.0, 573.0], [52.1, 573.0], [52.2, 573.0], [52.3, 574.0], [52.4, 577.0], [52.5, 577.0], [52.6, 577.0], [52.7, 577.0], [52.8, 578.0], [52.9, 578.0], [53.0, 578.0], [53.1, 578.0], [53.2, 578.0], [53.3, 578.0], [53.4, 578.0], [53.5, 579.0], [53.6, 579.0], [53.7, 579.0], [53.8, 579.0], [53.9, 579.0], [54.0, 579.0], [54.1, 583.0], [54.2, 584.0], [54.3, 584.0], [54.4, 584.0], [54.5, 586.0], [54.6, 587.0], [54.7, 588.0], [54.8, 588.0], [54.9, 588.0], [55.0, 589.0], [55.1, 589.0], [55.2, 591.0], [55.3, 593.0], [55.4, 595.0], [55.5, 595.0], [55.6, 596.0], [55.7, 596.0], [55.8, 598.0], [55.9, 598.0], [56.0, 598.0], [56.1, 604.0], [56.2, 605.0], [56.3, 605.0], [56.4, 606.0], [56.5, 607.0], [56.6, 609.0], [56.7, 609.0], [56.8, 609.0], [56.9, 609.0], [57.0, 609.0], [57.1, 610.0], [57.2, 611.0], [57.3, 612.0], [57.4, 612.0], [57.5, 614.0], [57.6, 615.0], [57.7, 616.0], [57.8, 616.0], [57.9, 626.0], [58.0, 627.0], [58.1, 630.0], [58.2, 630.0], [58.3, 631.0], [58.4, 631.0], [58.5, 631.0], [58.6, 632.0], [58.7, 632.0], [58.8, 634.0], [58.9, 634.0], [59.0, 636.0], [59.1, 636.0], [59.2, 637.0], [59.3, 637.0], [59.4, 637.0], [59.5, 639.0], [59.6, 640.0], [59.7, 640.0], [59.8, 642.0], [59.9, 644.0], [60.0, 644.0], [60.1, 644.0], [60.2, 644.0], [60.3, 645.0], [60.4, 645.0], [60.5, 646.0], [60.6, 651.0], [60.7, 654.0], [60.8, 654.0], [60.9, 657.0], [61.0, 658.0], [61.1, 660.0], [61.2, 660.0], [61.3, 662.0], [61.4, 664.0], [61.5, 669.0], [61.6, 669.0], [61.7, 670.0], [61.8, 671.0], [61.9, 671.0], [62.0, 673.0], [62.1, 677.0], [62.2, 686.0], [62.3, 686.0], [62.4, 696.0], [62.5, 699.0], [62.6, 700.0], [62.7, 700.0], [62.8, 704.0], [62.9, 704.0], [63.0, 707.0], [63.1, 707.0], [63.2, 708.0], [63.3, 712.0], [63.4, 712.0], [63.5, 715.0], [63.6, 717.0], [63.7, 723.0], [63.8, 723.0], [63.9, 733.0], [64.0, 745.0], [64.1, 752.0], [64.2, 752.0], [64.3, 759.0], [64.4, 764.0], [64.5, 764.0], [64.6, 764.0], [64.7, 767.0], [64.8, 768.0], [64.9, 770.0], [65.0, 770.0], [65.1, 775.0], [65.2, 776.0], [65.3, 776.0], [65.4, 778.0], [65.5, 780.0], [65.6, 784.0], [65.7, 784.0], [65.8, 794.0], [65.9, 797.0], [66.0, 798.0], [66.1, 798.0], [66.2, 798.0], [66.3, 800.0], [66.4, 803.0], [66.5, 803.0], [66.6, 803.0], [66.7, 804.0], [66.8, 804.0], [66.9, 805.0], [67.0, 806.0], [67.1, 807.0], [67.2, 807.0], [67.3, 809.0], [67.4, 811.0], [67.5, 812.0], [67.6, 812.0], [67.7, 814.0], [67.8, 815.0], [67.9, 816.0], [68.0, 816.0], [68.1, 817.0], [68.2, 819.0], [68.3, 822.0], [68.4, 822.0], [68.5, 824.0], [68.6, 824.0], [68.7, 824.0], [68.8, 825.0], [68.9, 829.0], [69.0, 830.0], [69.1, 830.0], [69.2, 834.0], [69.3, 835.0], [69.4, 836.0], [69.5, 836.0], [69.6, 838.0], [69.7, 843.0], [69.8, 843.0], [69.9, 843.0], [70.0, 844.0], [70.1, 844.0], [70.2, 844.0], [70.3, 846.0], [70.4, 847.0], [70.5, 847.0], [70.6, 847.0], [70.7, 847.0], [70.8, 850.0], [70.9, 850.0], [71.0, 850.0], [71.1, 850.0], [71.2, 850.0], [71.3, 855.0], [71.4, 855.0], [71.5, 855.0], [71.6, 856.0], [71.7, 856.0], [71.8, 858.0], [71.9, 859.0], [72.0, 859.0], [72.1, 859.0], [72.2, 861.0], [72.3, 861.0], [72.4, 862.0], [72.5, 862.0], [72.6, 863.0], [72.7, 864.0], [72.8, 867.0], [72.9, 867.0], [73.0, 867.0], [73.1, 870.0], [73.2, 871.0], [73.3, 871.0], [73.4, 873.0], [73.5, 873.0], [73.6, 873.0], [73.7, 874.0], [73.8, 877.0], [73.9, 880.0], [74.0, 880.0], [74.1, 883.0], [74.2, 883.0], [74.3, 884.0], [74.4, 884.0], [74.5, 885.0], [74.6, 885.0], [74.7, 886.0], [74.8, 886.0], [74.9, 889.0], [75.0, 891.0], [75.1, 891.0], [75.2, 892.0], [75.3, 895.0], [75.4, 896.0], [75.5, 896.0], [75.6, 897.0], [75.7, 900.0], [75.8, 900.0], [75.9, 900.0], [76.0, 900.0], [76.1, 902.0], [76.2, 902.0], [76.3, 902.0], [76.4, 904.0], [76.5, 904.0], [76.6, 904.0], [76.7, 904.0], [76.8, 904.0], [76.9, 906.0], [77.0, 906.0], [77.1, 907.0], [77.2, 908.0], [77.3, 909.0], [77.4, 909.0], [77.5, 910.0], [77.6, 913.0], [77.7, 914.0], [77.8, 914.0], [77.9, 922.0], [78.0, 924.0], [78.1, 927.0], [78.2, 927.0], [78.3, 927.0], [78.4, 928.0], [78.5, 928.0], [78.6, 928.0], [78.7, 929.0], [78.8, 929.0], [78.9, 929.0], [79.0, 932.0], [79.1, 933.0], [79.2, 934.0], [79.3, 934.0], [79.4, 934.0], [79.5, 935.0], [79.6, 938.0], [79.7, 938.0], [79.8, 944.0], [79.9, 948.0], [80.0, 949.0], [80.1, 949.0], [80.2, 958.0], [80.3, 960.0], [80.4, 960.0], [80.5, 961.0], [80.6, 961.0], [80.7, 966.0], [80.8, 966.0], [80.9, 972.0], [81.0, 973.0], [81.1, 977.0], [81.2, 977.0], [81.3, 987.0], [81.4, 988.0], [81.5, 991.0], [81.6, 991.0], [81.7, 1000.0], [81.8, 1029.0], [81.9, 1029.0], [82.0, 1029.0], [82.1, 1041.0], [82.2, 1049.0], [82.3, 1049.0], [82.4, 1050.0], [82.5, 1057.0], [82.6, 1066.0], [82.7, 1066.0], [82.8, 1081.0], [82.9, 1112.0], [83.0, 1118.0], [83.1, 1118.0], [83.2, 1122.0], [83.3, 1124.0], [83.4, 1124.0], [83.5, 1127.0], [83.6, 1130.0], [83.7, 1143.0], [83.8, 1143.0], [83.9, 1144.0], [84.0, 1144.0], [84.1, 1146.0], [84.2, 1146.0], [84.3, 1153.0], [84.4, 1157.0], [84.5, 1165.0], [84.6, 1165.0], [84.7, 1169.0], [84.8, 1175.0], [84.9, 1179.0], [85.0, 1179.0], [85.1, 1180.0], [85.2, 1182.0], [85.3, 1182.0], [85.4, 1184.0], [85.5, 1184.0], [85.6, 1186.0], [85.7, 1186.0], [85.8, 1196.0], [85.9, 1196.0], [86.0, 1199.0], [86.1, 1199.0], [86.2, 1204.0], [86.3, 1208.0], [86.4, 1216.0], [86.5, 1216.0], [86.6, 1219.0], [86.7, 1221.0], [86.8, 1221.0], [86.9, 1222.0], [87.0, 1223.0], [87.1, 1225.0], [87.2, 1225.0], [87.3, 1226.0], [87.4, 1226.0], [87.5, 1228.0], [87.6, 1228.0], [87.7, 1229.0], [87.8, 1231.0], [87.9, 1234.0], [88.0, 1234.0], [88.1, 1235.0], [88.2, 1241.0], [88.3, 1241.0], [88.4, 1241.0], [88.5, 1249.0], [88.6, 1250.0], [88.7, 1250.0], [88.8, 1254.0], [88.9, 1261.0], [89.0, 1261.0], [89.1, 1261.0], [89.2, 1264.0], [89.3, 1267.0], [89.4, 1269.0], [89.5, 1269.0], [89.6, 1269.0], [89.7, 1277.0], [89.8, 1278.0], [89.9, 1278.0], [90.0, 1280.0], [90.1, 1283.0], [90.2, 1283.0], [90.3, 1286.0], [90.4, 1286.0], [90.5, 1289.0], [90.6, 1289.0], [90.7, 1292.0], [90.8, 1304.0], [90.9, 1309.0], [91.0, 1309.0], [91.1, 1312.0], [91.2, 1313.0], [91.3, 1315.0], [91.4, 1315.0], [91.5, 1316.0], [91.6, 1322.0], [91.7, 1322.0], [91.8, 1323.0], [91.9, 1324.0], [92.0, 1327.0], [92.1, 1327.0], [92.2, 1329.0], [92.3, 1344.0], [92.4, 1349.0], [92.5, 1349.0], [92.6, 1357.0], [92.7, 1376.0], [92.8, 1380.0], [92.9, 1380.0], [93.0, 1382.0], [93.1, 1384.0], [93.2, 1385.0], [93.3, 1385.0], [93.4, 1392.0], [93.5, 1421.0], [93.6, 1421.0], [93.7, 1436.0], [93.8, 1445.0], [93.9, 1461.0], [94.0, 1461.0], [94.1, 1462.0], [94.2, 1463.0], [94.3, 1466.0], [94.4, 1466.0], [94.5, 1490.0], [94.6, 1495.0], [94.7, 1515.0], [94.8, 1515.0], [94.9, 1535.0], [95.0, 1617.0], [95.1, 1617.0], [95.2, 1641.0], [95.3, 1650.0], [95.4, 1665.0], [95.5, 1665.0], [95.6, 1673.0], [95.7, 1675.0], [95.8, 1675.0], [95.9, 1675.0], [96.0, 1715.0], [96.1, 1742.0], [96.2, 1761.0], [96.3, 1761.0], [96.4, 1777.0], [96.5, 1828.0], [96.6, 1835.0], [96.7, 1835.0], [96.8, 1879.0], [96.9, 1911.0], [97.0, 1911.0], [97.1, 1951.0], [97.2, 1967.0], [97.3, 1982.0], [97.4, 1982.0], [97.5, 2075.0], [97.6, 2176.0], [97.7, 2227.0], [97.8, 2227.0], [97.9, 2254.0], [98.0, 2543.0], [98.1, 2554.0], [98.2, 2554.0], [98.3, 2624.0], [98.4, 3934.0], [98.5, 3934.0], [98.6, 4185.0], [98.7, 4363.0], [98.8, 6630.0], [98.9, 6630.0], [99.0, 7141.0], [99.1, 7183.0], [99.2, 7540.0], [99.3, 7540.0], [99.4, 12241.0], [99.5, 20407.0], [99.6, 22527.0], [99.7, 22527.0], [99.8, 26231.0], [99.9, 40515.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 166.0, "series": [{"data": [[600.0, 48.0], [700.0, 27.0], [12200.0, 1.0], [800.0, 69.0], [900.0, 44.0], [1000.0, 9.0], [1100.0, 24.0], [1200.0, 34.0], [20400.0, 1.0], [1300.0, 20.0], [1400.0, 9.0], [22500.0, 1.0], [1500.0, 2.0], [1600.0, 7.0], [26200.0, 1.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2500.0, 2.0], [40500.0, 1.0], [2600.0, 1.0], [200.0, 48.0], [3900.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [300.0, 93.0], [400.0, 166.0], [6600.0, 1.0], [7100.0, 2.0], [7500.0, 1.0], [500.0, 105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 40500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 387.0, "series": [{"data": [[0.0, 309.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 387.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.23728813559322, "minX": 1.60386696E12, "maxY": 10.0, "series": [{"data": [[1.60386696E12, 10.0], [1.60386702E12, 10.0], [1.60386708E12, 9.23728813559322]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386708E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 421.0, "minX": 1.0, "maxY": 40515.0, "series": [{"data": [[8.0, 519.0], [4.0, 501.0], [2.0, 7540.0], [1.0, 1490.0], [9.0, 482.0], [10.0, 836.5151515151518], [5.0, 972.0], [6.0, 2554.0], [3.0, 40515.0], [7.0, 421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 901.0938775510207]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 37.833333333333336, "minX": 1.60386696E12, "maxY": 1962493.7666666666, "series": [{"data": [[1.60386696E12, 22198.566666666666], [1.60386702E12, 1962493.7666666666], [1.60386708E12, 210541.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386696E12, 37.833333333333336], [1.60386702E12, 5052.016666666666], [1.60386708E12, 433.18333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386708E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 844.3204172876299, "minX": 1.60386696E12, "maxY": 1535.3898305084747, "series": [{"data": [[1.60386696E12, 1035.4], [1.60386702E12, 844.3204172876299], [1.60386708E12, 1535.3898305084747]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386708E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 843.4187779433679, "minX": 1.60386696E12, "maxY": 1534.084745762712, "series": [{"data": [[1.60386696E12, 1033.6], [1.60386702E12, 843.4187779433679], [1.60386708E12, 1534.084745762712]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386708E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01694915254237289, "minX": 1.60386696E12, "maxY": 9.0, "series": [{"data": [[1.60386696E12, 9.0], [1.60386702E12, 0.0789865871833085], [1.60386708E12, 0.01694915254237289]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386708E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.60386696E12, "maxY": 40515.0, "series": [{"data": [[1.60386696E12, 1515.0], [1.60386702E12, 26231.0], [1.60386708E12, 40515.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386696E12, 523.0], [1.60386702E12, 227.09599967956544], [1.60386708E12, 229.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386696E12, 523.0], [1.60386702E12, 228.30560012817384], [1.60386708E12, 229.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386696E12, 523.0], [1.60386702E12, 227.7679998397827], [1.60386708E12, 229.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386696E12, 523.0], [1.60386702E12, 216.0], [1.60386708E12, 229.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386696E12, 961.0], [1.60386702E12, 559.0], [1.60386708E12, 436.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 394.0, "minX": 1.0, "maxY": 1490.0, "series": [{"data": [[8.0, 528.5], [9.0, 830.0], [10.0, 764.0], [11.0, 640.5], [3.0, 864.5], [12.0, 521.5], [13.0, 466.0], [14.0, 443.0], [15.0, 394.0], [4.0, 1255.5], [16.0, 404.0], [1.0, 1490.0], [17.0, 427.5], [18.0, 425.5], [19.0, 426.0], [5.0, 1090.5], [7.0, 1269.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 1.0, "maxY": 1490.0, "series": [{"data": [[8.0, 527.5], [9.0, 829.0], [10.0, 763.5], [11.0, 640.0], [3.0, 862.0], [12.0, 521.0], [13.0, 465.5], [14.0, 442.0], [15.0, 394.0], [4.0, 1255.0], [16.0, 403.5], [1.0, 1490.0], [17.0, 427.0], [18.0, 425.5], [19.0, 425.5], [5.0, 1089.5], [7.0, 1268.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60386696E12, "maxY": 11.2, "series": [{"data": [[1.60386696E12, 0.23333333333333334], [1.60386702E12, 11.2], [1.60386708E12, 0.8166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386708E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60386696E12, "maxY": 11.183333333333334, "series": [{"data": [[1.60386696E12, 0.08333333333333333], [1.60386702E12, 11.183333333333334], [1.60386708E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386708E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60386696E12, "maxY": 11.183333333333334, "series": [{"data": [[1.60386696E12, 0.08333333333333333], [1.60386702E12, 11.183333333333334], [1.60386708E12, 0.9833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386708E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60386696E12, "maxY": 11.183333333333334, "series": [{"data": [[1.60386696E12, 0.08333333333333333], [1.60386702E12, 11.183333333333334], [1.60386708E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386708E12, "title": "Total Transactions Per Second"}},
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

