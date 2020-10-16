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
        data: {"result": {"minY": 223.0, "minX": 0.0, "maxY": 64066.0, "series": [{"data": [[0.0, 223.0], [0.1, 225.0], [0.2, 226.0], [0.3, 227.0], [0.4, 228.0], [0.5, 228.0], [0.6, 229.0], [0.7, 229.0], [0.8, 230.0], [0.9, 230.0], [1.0, 230.0], [1.1, 231.0], [1.2, 231.0], [1.3, 232.0], [1.4, 232.0], [1.5, 233.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 234.0], [2.0, 234.0], [2.1, 234.0], [2.2, 234.0], [2.3, 235.0], [2.4, 235.0], [2.5, 235.0], [2.6, 235.0], [2.7, 236.0], [2.8, 236.0], [2.9, 236.0], [3.0, 236.0], [3.1, 236.0], [3.2, 237.0], [3.3, 237.0], [3.4, 237.0], [3.5, 237.0], [3.6, 237.0], [3.7, 237.0], [3.8, 238.0], [3.9, 238.0], [4.0, 238.0], [4.1, 238.0], [4.2, 239.0], [4.3, 239.0], [4.4, 239.0], [4.5, 239.0], [4.6, 239.0], [4.7, 239.0], [4.8, 240.0], [4.9, 240.0], [5.0, 240.0], [5.1, 240.0], [5.2, 240.0], [5.3, 241.0], [5.4, 241.0], [5.5, 241.0], [5.6, 241.0], [5.7, 241.0], [5.8, 242.0], [5.9, 242.0], [6.0, 242.0], [6.1, 242.0], [6.2, 242.0], [6.3, 242.0], [6.4, 243.0], [6.5, 243.0], [6.6, 243.0], [6.7, 244.0], [6.8, 244.0], [6.9, 244.0], [7.0, 244.0], [7.1, 245.0], [7.2, 245.0], [7.3, 245.0], [7.4, 245.0], [7.5, 246.0], [7.6, 246.0], [7.7, 246.0], [7.8, 246.0], [7.9, 247.0], [8.0, 247.0], [8.1, 247.0], [8.2, 248.0], [8.3, 248.0], [8.4, 248.0], [8.5, 248.0], [8.6, 248.0], [8.7, 249.0], [8.8, 249.0], [8.9, 249.0], [9.0, 249.0], [9.1, 250.0], [9.2, 250.0], [9.3, 250.0], [9.4, 251.0], [9.5, 251.0], [9.6, 252.0], [9.7, 252.0], [9.8, 252.0], [9.9, 252.0], [10.0, 253.0], [10.1, 253.0], [10.2, 254.0], [10.3, 254.0], [10.4, 254.0], [10.5, 255.0], [10.6, 255.0], [10.7, 255.0], [10.8, 256.0], [10.9, 256.0], [11.0, 256.0], [11.1, 257.0], [11.2, 257.0], [11.3, 257.0], [11.4, 257.0], [11.5, 258.0], [11.6, 258.0], [11.7, 258.0], [11.8, 259.0], [11.9, 259.0], [12.0, 259.0], [12.1, 260.0], [12.2, 261.0], [12.3, 261.0], [12.4, 262.0], [12.5, 262.0], [12.6, 262.0], [12.7, 263.0], [12.8, 264.0], [12.9, 264.0], [13.0, 264.0], [13.1, 265.0], [13.2, 266.0], [13.3, 266.0], [13.4, 267.0], [13.5, 267.0], [13.6, 268.0], [13.7, 269.0], [13.8, 269.0], [13.9, 270.0], [14.0, 271.0], [14.1, 271.0], [14.2, 272.0], [14.3, 272.0], [14.4, 273.0], [14.5, 273.0], [14.6, 274.0], [14.7, 274.0], [14.8, 275.0], [14.9, 276.0], [15.0, 277.0], [15.1, 278.0], [15.2, 278.0], [15.3, 280.0], [15.4, 280.0], [15.5, 281.0], [15.6, 282.0], [15.7, 282.0], [15.8, 283.0], [15.9, 283.0], [16.0, 283.0], [16.1, 284.0], [16.2, 284.0], [16.3, 285.0], [16.4, 286.0], [16.5, 287.0], [16.6, 288.0], [16.7, 288.0], [16.8, 288.0], [16.9, 289.0], [17.0, 290.0], [17.1, 290.0], [17.2, 291.0], [17.3, 292.0], [17.4, 292.0], [17.5, 293.0], [17.6, 293.0], [17.7, 294.0], [17.8, 294.0], [17.9, 295.0], [18.0, 296.0], [18.1, 296.0], [18.2, 297.0], [18.3, 297.0], [18.4, 298.0], [18.5, 299.0], [18.6, 299.0], [18.7, 300.0], [18.8, 300.0], [18.9, 300.0], [19.0, 301.0], [19.1, 301.0], [19.2, 302.0], [19.3, 302.0], [19.4, 302.0], [19.5, 302.0], [19.6, 303.0], [19.7, 303.0], [19.8, 303.0], [19.9, 304.0], [20.0, 304.0], [20.1, 304.0], [20.2, 304.0], [20.3, 304.0], [20.4, 305.0], [20.5, 305.0], [20.6, 305.0], [20.7, 305.0], [20.8, 305.0], [20.9, 305.0], [21.0, 305.0], [21.1, 306.0], [21.2, 306.0], [21.3, 306.0], [21.4, 307.0], [21.5, 307.0], [21.6, 307.0], [21.7, 307.0], [21.8, 308.0], [21.9, 308.0], [22.0, 308.0], [22.1, 308.0], [22.2, 308.0], [22.3, 309.0], [22.4, 309.0], [22.5, 309.0], [22.6, 310.0], [22.7, 310.0], [22.8, 311.0], [22.9, 311.0], [23.0, 311.0], [23.1, 311.0], [23.2, 312.0], [23.3, 312.0], [23.4, 312.0], [23.5, 312.0], [23.6, 312.0], [23.7, 313.0], [23.8, 313.0], [23.9, 314.0], [24.0, 314.0], [24.1, 314.0], [24.2, 314.0], [24.3, 315.0], [24.4, 315.0], [24.5, 315.0], [24.6, 316.0], [24.7, 316.0], [24.8, 317.0], [24.9, 317.0], [25.0, 318.0], [25.1, 318.0], [25.2, 318.0], [25.3, 318.0], [25.4, 319.0], [25.5, 319.0], [25.6, 319.0], [25.7, 320.0], [25.8, 320.0], [25.9, 320.0], [26.0, 321.0], [26.1, 321.0], [26.2, 321.0], [26.3, 321.0], [26.4, 322.0], [26.5, 322.0], [26.6, 322.0], [26.7, 323.0], [26.8, 323.0], [26.9, 323.0], [27.0, 324.0], [27.1, 325.0], [27.2, 325.0], [27.3, 325.0], [27.4, 326.0], [27.5, 326.0], [27.6, 327.0], [27.7, 328.0], [27.8, 328.0], [27.9, 329.0], [28.0, 329.0], [28.1, 329.0], [28.2, 329.0], [28.3, 329.0], [28.4, 330.0], [28.5, 330.0], [28.6, 331.0], [28.7, 331.0], [28.8, 331.0], [28.9, 332.0], [29.0, 333.0], [29.1, 333.0], [29.2, 334.0], [29.3, 334.0], [29.4, 335.0], [29.5, 335.0], [29.6, 336.0], [29.7, 336.0], [29.8, 336.0], [29.9, 337.0], [30.0, 337.0], [30.1, 338.0], [30.2, 339.0], [30.3, 340.0], [30.4, 340.0], [30.5, 340.0], [30.6, 341.0], [30.7, 341.0], [30.8, 342.0], [30.9, 342.0], [31.0, 343.0], [31.1, 343.0], [31.2, 344.0], [31.3, 344.0], [31.4, 345.0], [31.5, 346.0], [31.6, 346.0], [31.7, 347.0], [31.8, 347.0], [31.9, 348.0], [32.0, 348.0], [32.1, 348.0], [32.2, 349.0], [32.3, 349.0], [32.4, 349.0], [32.5, 350.0], [32.6, 351.0], [32.7, 351.0], [32.8, 351.0], [32.9, 352.0], [33.0, 352.0], [33.1, 353.0], [33.2, 353.0], [33.3, 354.0], [33.4, 355.0], [33.5, 355.0], [33.6, 356.0], [33.7, 356.0], [33.8, 356.0], [33.9, 357.0], [34.0, 357.0], [34.1, 358.0], [34.2, 358.0], [34.3, 359.0], [34.4, 359.0], [34.5, 360.0], [34.6, 360.0], [34.7, 361.0], [34.8, 361.0], [34.9, 362.0], [35.0, 362.0], [35.1, 363.0], [35.2, 363.0], [35.3, 363.0], [35.4, 364.0], [35.5, 364.0], [35.6, 365.0], [35.7, 365.0], [35.8, 366.0], [35.9, 366.0], [36.0, 367.0], [36.1, 367.0], [36.2, 367.0], [36.3, 368.0], [36.4, 368.0], [36.5, 369.0], [36.6, 369.0], [36.7, 369.0], [36.8, 370.0], [36.9, 371.0], [37.0, 371.0], [37.1, 372.0], [37.2, 373.0], [37.3, 373.0], [37.4, 374.0], [37.5, 374.0], [37.6, 375.0], [37.7, 375.0], [37.8, 376.0], [37.9, 377.0], [38.0, 378.0], [38.1, 378.0], [38.2, 379.0], [38.3, 379.0], [38.4, 380.0], [38.5, 381.0], [38.6, 381.0], [38.7, 382.0], [38.8, 382.0], [38.9, 383.0], [39.0, 383.0], [39.1, 384.0], [39.2, 384.0], [39.3, 385.0], [39.4, 385.0], [39.5, 386.0], [39.6, 386.0], [39.7, 387.0], [39.8, 388.0], [39.9, 389.0], [40.0, 390.0], [40.1, 391.0], [40.2, 392.0], [40.3, 393.0], [40.4, 393.0], [40.5, 394.0], [40.6, 394.0], [40.7, 396.0], [40.8, 396.0], [40.9, 397.0], [41.0, 397.0], [41.1, 398.0], [41.2, 399.0], [41.3, 400.0], [41.4, 401.0], [41.5, 401.0], [41.6, 402.0], [41.7, 402.0], [41.8, 403.0], [41.9, 403.0], [42.0, 404.0], [42.1, 404.0], [42.2, 406.0], [42.3, 406.0], [42.4, 407.0], [42.5, 408.0], [42.6, 409.0], [42.7, 410.0], [42.8, 410.0], [42.9, 412.0], [43.0, 413.0], [43.1, 413.0], [43.2, 414.0], [43.3, 415.0], [43.4, 415.0], [43.5, 416.0], [43.6, 418.0], [43.7, 419.0], [43.8, 419.0], [43.9, 420.0], [44.0, 421.0], [44.1, 422.0], [44.2, 423.0], [44.3, 423.0], [44.4, 424.0], [44.5, 424.0], [44.6, 426.0], [44.7, 426.0], [44.8, 428.0], [44.9, 428.0], [45.0, 429.0], [45.1, 431.0], [45.2, 432.0], [45.3, 433.0], [45.4, 433.0], [45.5, 434.0], [45.6, 435.0], [45.7, 435.0], [45.8, 437.0], [45.9, 438.0], [46.0, 440.0], [46.1, 441.0], [46.2, 442.0], [46.3, 443.0], [46.4, 444.0], [46.5, 445.0], [46.6, 446.0], [46.7, 447.0], [46.8, 449.0], [46.9, 451.0], [47.0, 451.0], [47.1, 452.0], [47.2, 453.0], [47.3, 453.0], [47.4, 454.0], [47.5, 455.0], [47.6, 456.0], [47.7, 457.0], [47.8, 458.0], [47.9, 460.0], [48.0, 462.0], [48.1, 462.0], [48.2, 463.0], [48.3, 464.0], [48.4, 465.0], [48.5, 467.0], [48.6, 468.0], [48.7, 471.0], [48.8, 471.0], [48.9, 472.0], [49.0, 474.0], [49.1, 475.0], [49.2, 476.0], [49.3, 476.0], [49.4, 477.0], [49.5, 478.0], [49.6, 481.0], [49.7, 482.0], [49.8, 483.0], [49.9, 484.0], [50.0, 485.0], [50.1, 485.0], [50.2, 487.0], [50.3, 488.0], [50.4, 489.0], [50.5, 491.0], [50.6, 493.0], [50.7, 494.0], [50.8, 496.0], [50.9, 497.0], [51.0, 498.0], [51.1, 501.0], [51.2, 502.0], [51.3, 503.0], [51.4, 504.0], [51.5, 505.0], [51.6, 506.0], [51.7, 507.0], [51.8, 508.0], [51.9, 509.0], [52.0, 510.0], [52.1, 512.0], [52.2, 514.0], [52.3, 515.0], [52.4, 516.0], [52.5, 518.0], [52.6, 519.0], [52.7, 519.0], [52.8, 520.0], [52.9, 521.0], [53.0, 521.0], [53.1, 522.0], [53.2, 523.0], [53.3, 524.0], [53.4, 525.0], [53.5, 527.0], [53.6, 529.0], [53.7, 530.0], [53.8, 531.0], [53.9, 533.0], [54.0, 535.0], [54.1, 536.0], [54.2, 537.0], [54.3, 540.0], [54.4, 540.0], [54.5, 541.0], [54.6, 542.0], [54.7, 543.0], [54.8, 544.0], [54.9, 545.0], [55.0, 547.0], [55.1, 548.0], [55.2, 549.0], [55.3, 551.0], [55.4, 552.0], [55.5, 554.0], [55.6, 556.0], [55.7, 557.0], [55.8, 558.0], [55.9, 559.0], [56.0, 561.0], [56.1, 562.0], [56.2, 563.0], [56.3, 565.0], [56.4, 566.0], [56.5, 566.0], [56.6, 567.0], [56.7, 569.0], [56.8, 569.0], [56.9, 571.0], [57.0, 572.0], [57.1, 573.0], [57.2, 574.0], [57.3, 576.0], [57.4, 577.0], [57.5, 580.0], [57.6, 580.0], [57.7, 581.0], [57.8, 583.0], [57.9, 585.0], [58.0, 586.0], [58.1, 588.0], [58.2, 590.0], [58.3, 590.0], [58.4, 593.0], [58.5, 594.0], [58.6, 595.0], [58.7, 597.0], [58.8, 598.0], [58.9, 598.0], [59.0, 600.0], [59.1, 600.0], [59.2, 602.0], [59.3, 602.0], [59.4, 604.0], [59.5, 606.0], [59.6, 607.0], [59.7, 608.0], [59.8, 609.0], [59.9, 610.0], [60.0, 611.0], [60.1, 612.0], [60.2, 613.0], [60.3, 614.0], [60.4, 616.0], [60.5, 618.0], [60.6, 618.0], [60.7, 619.0], [60.8, 620.0], [60.9, 622.0], [61.0, 623.0], [61.1, 626.0], [61.2, 628.0], [61.3, 629.0], [61.4, 632.0], [61.5, 633.0], [61.6, 634.0], [61.7, 635.0], [61.8, 638.0], [61.9, 639.0], [62.0, 640.0], [62.1, 642.0], [62.2, 642.0], [62.3, 643.0], [62.4, 644.0], [62.5, 645.0], [62.6, 647.0], [62.7, 649.0], [62.8, 650.0], [62.9, 651.0], [63.0, 652.0], [63.1, 654.0], [63.2, 656.0], [63.3, 657.0], [63.4, 658.0], [63.5, 660.0], [63.6, 661.0], [63.7, 664.0], [63.8, 667.0], [63.9, 669.0], [64.0, 670.0], [64.1, 672.0], [64.2, 673.0], [64.3, 676.0], [64.4, 677.0], [64.5, 679.0], [64.6, 681.0], [64.7, 681.0], [64.8, 683.0], [64.9, 685.0], [65.0, 687.0], [65.1, 687.0], [65.2, 689.0], [65.3, 691.0], [65.4, 692.0], [65.5, 693.0], [65.6, 694.0], [65.7, 696.0], [65.8, 698.0], [65.9, 698.0], [66.0, 700.0], [66.1, 701.0], [66.2, 702.0], [66.3, 704.0], [66.4, 706.0], [66.5, 707.0], [66.6, 708.0], [66.7, 711.0], [66.8, 712.0], [66.9, 715.0], [67.0, 717.0], [67.1, 719.0], [67.2, 720.0], [67.3, 722.0], [67.4, 725.0], [67.5, 727.0], [67.6, 729.0], [67.7, 731.0], [67.8, 732.0], [67.9, 734.0], [68.0, 735.0], [68.1, 738.0], [68.2, 739.0], [68.3, 742.0], [68.4, 744.0], [68.5, 746.0], [68.6, 746.0], [68.7, 748.0], [68.8, 750.0], [68.9, 753.0], [69.0, 757.0], [69.1, 759.0], [69.2, 762.0], [69.3, 763.0], [69.4, 765.0], [69.5, 769.0], [69.6, 770.0], [69.7, 771.0], [69.8, 773.0], [69.9, 776.0], [70.0, 776.0], [70.1, 779.0], [70.2, 780.0], [70.3, 783.0], [70.4, 786.0], [70.5, 788.0], [70.6, 792.0], [70.7, 793.0], [70.8, 796.0], [70.9, 798.0], [71.0, 801.0], [71.1, 802.0], [71.2, 805.0], [71.3, 810.0], [71.4, 811.0], [71.5, 814.0], [71.6, 815.0], [71.7, 818.0], [71.8, 819.0], [71.9, 821.0], [72.0, 823.0], [72.1, 827.0], [72.2, 829.0], [72.3, 831.0], [72.4, 834.0], [72.5, 837.0], [72.6, 840.0], [72.7, 846.0], [72.8, 847.0], [72.9, 849.0], [73.0, 855.0], [73.1, 856.0], [73.2, 861.0], [73.3, 863.0], [73.4, 865.0], [73.5, 868.0], [73.6, 869.0], [73.7, 872.0], [73.8, 876.0], [73.9, 881.0], [74.0, 886.0], [74.1, 888.0], [74.2, 891.0], [74.3, 894.0], [74.4, 898.0], [74.5, 899.0], [74.6, 903.0], [74.7, 904.0], [74.8, 908.0], [74.9, 912.0], [75.0, 914.0], [75.1, 917.0], [75.2, 921.0], [75.3, 928.0], [75.4, 930.0], [75.5, 933.0], [75.6, 937.0], [75.7, 942.0], [75.8, 949.0], [75.9, 952.0], [76.0, 958.0], [76.1, 961.0], [76.2, 963.0], [76.3, 968.0], [76.4, 973.0], [76.5, 979.0], [76.6, 982.0], [76.7, 985.0], [76.8, 986.0], [76.9, 989.0], [77.0, 990.0], [77.1, 996.0], [77.2, 1001.0], [77.3, 1002.0], [77.4, 1006.0], [77.5, 1009.0], [77.6, 1016.0], [77.7, 1019.0], [77.8, 1020.0], [77.9, 1026.0], [78.0, 1030.0], [78.1, 1036.0], [78.2, 1038.0], [78.3, 1047.0], [78.4, 1050.0], [78.5, 1058.0], [78.6, 1067.0], [78.7, 1071.0], [78.8, 1076.0], [78.9, 1078.0], [79.0, 1083.0], [79.1, 1091.0], [79.2, 1102.0], [79.3, 1110.0], [79.4, 1116.0], [79.5, 1124.0], [79.6, 1132.0], [79.7, 1142.0], [79.8, 1148.0], [79.9, 1150.0], [80.0, 1163.0], [80.1, 1165.0], [80.2, 1171.0], [80.3, 1175.0], [80.4, 1178.0], [80.5, 1186.0], [80.6, 1192.0], [80.7, 1198.0], [80.8, 1204.0], [80.9, 1208.0], [81.0, 1219.0], [81.1, 1223.0], [81.2, 1233.0], [81.3, 1236.0], [81.4, 1240.0], [81.5, 1247.0], [81.6, 1254.0], [81.7, 1264.0], [81.8, 1277.0], [81.9, 1289.0], [82.0, 1300.0], [82.1, 1304.0], [82.2, 1309.0], [82.3, 1315.0], [82.4, 1327.0], [82.5, 1338.0], [82.6, 1345.0], [82.7, 1358.0], [82.8, 1369.0], [82.9, 1375.0], [83.0, 1390.0], [83.1, 1401.0], [83.2, 1427.0], [83.3, 1441.0], [83.4, 1463.0], [83.5, 1489.0], [83.6, 1498.0], [83.7, 1508.0], [83.8, 1523.0], [83.9, 1529.0], [84.0, 1539.0], [84.1, 1550.0], [84.2, 1558.0], [84.3, 1578.0], [84.4, 1588.0], [84.5, 1598.0], [84.6, 1616.0], [84.7, 1621.0], [84.8, 1627.0], [84.9, 1635.0], [85.0, 1639.0], [85.1, 1642.0], [85.2, 1645.0], [85.3, 1652.0], [85.4, 1655.0], [85.5, 1657.0], [85.6, 1659.0], [85.7, 1667.0], [85.8, 1670.0], [85.9, 1672.0], [86.0, 1673.0], [86.1, 1678.0], [86.2, 1681.0], [86.3, 1685.0], [86.4, 1689.0], [86.5, 1689.0], [86.6, 1694.0], [86.7, 1699.0], [86.8, 1700.0], [86.9, 1706.0], [87.0, 1708.0], [87.1, 1713.0], [87.2, 1717.0], [87.3, 1721.0], [87.4, 1725.0], [87.5, 1727.0], [87.6, 1730.0], [87.7, 1733.0], [87.8, 1734.0], [87.9, 1737.0], [88.0, 1740.0], [88.1, 1745.0], [88.2, 1748.0], [88.3, 1753.0], [88.4, 1761.0], [88.5, 1765.0], [88.6, 1767.0], [88.7, 1768.0], [88.8, 1774.0], [88.9, 1781.0], [89.0, 1788.0], [89.1, 1790.0], [89.2, 1796.0], [89.3, 1799.0], [89.4, 1805.0], [89.5, 1809.0], [89.6, 1811.0], [89.7, 1817.0], [89.8, 1819.0], [89.9, 1824.0], [90.0, 1829.0], [90.1, 1831.0], [90.2, 1835.0], [90.3, 1841.0], [90.4, 1848.0], [90.5, 1850.0], [90.6, 1856.0], [90.7, 1863.0], [90.8, 1871.0], [90.9, 1877.0], [91.0, 1881.0], [91.1, 1886.0], [91.2, 1888.0], [91.3, 1894.0], [91.4, 1902.0], [91.5, 1908.0], [91.6, 1916.0], [91.7, 1918.0], [91.8, 1926.0], [91.9, 1936.0], [92.0, 1939.0], [92.1, 1946.0], [92.2, 1954.0], [92.3, 1963.0], [92.4, 1972.0], [92.5, 1976.0], [92.6, 1984.0], [92.7, 1994.0], [92.8, 2000.0], [92.9, 2012.0], [93.0, 2015.0], [93.1, 2021.0], [93.2, 2028.0], [93.3, 2036.0], [93.4, 2049.0], [93.5, 2055.0], [93.6, 2071.0], [93.7, 2080.0], [93.8, 2088.0], [93.9, 2101.0], [94.0, 2106.0], [94.1, 2128.0], [94.2, 2148.0], [94.3, 2159.0], [94.4, 2167.0], [94.5, 2190.0], [94.6, 2235.0], [94.7, 2266.0], [94.8, 2282.0], [94.9, 2314.0], [95.0, 2344.0], [95.1, 2405.0], [95.2, 2415.0], [95.3, 2452.0], [95.4, 2482.0], [95.5, 2516.0], [95.6, 2538.0], [95.7, 2574.0], [95.8, 2604.0], [95.9, 2625.0], [96.0, 2651.0], [96.1, 2683.0], [96.2, 2737.0], [96.3, 2810.0], [96.4, 2871.0], [96.5, 2907.0], [96.6, 2954.0], [96.7, 3078.0], [96.8, 3239.0], [96.9, 3337.0], [97.0, 3381.0], [97.1, 3453.0], [97.2, 3522.0], [97.3, 3541.0], [97.4, 3620.0], [97.5, 3691.0], [97.6, 3783.0], [97.7, 3828.0], [97.8, 3855.0], [97.9, 3928.0], [98.0, 3978.0], [98.1, 4062.0], [98.2, 4178.0], [98.3, 4247.0], [98.4, 4383.0], [98.5, 4521.0], [98.6, 4703.0], [98.7, 4959.0], [98.8, 5103.0], [98.9, 5634.0], [99.0, 6055.0], [99.1, 6285.0], [99.2, 6788.0], [99.3, 9011.0], [99.4, 10823.0], [99.5, 14319.0], [99.6, 16903.0], [99.7, 24282.0], [99.8, 47769.0], [99.9, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1172.0, "series": [{"data": [[600.0, 365.0], [700.0, 257.0], [800.0, 186.0], [900.0, 136.0], [1000.0, 106.0], [1100.0, 79.0], [1200.0, 66.0], [1300.0, 56.0], [1400.0, 28.0], [1500.0, 47.0], [1600.0, 114.0], [1700.0, 135.0], [1800.0, 106.0], [1900.0, 75.0], [2000.0, 56.0], [2100.0, 34.0], [2200.0, 17.0], [2300.0, 11.0], [2400.0, 20.0], [2500.0, 16.0], [2600.0, 20.0], [2800.0, 10.0], [2700.0, 7.0], [2900.0, 10.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 8.0], [3200.0, 6.0], [3400.0, 7.0], [3500.0, 10.0], [3600.0, 9.0], [3700.0, 6.0], [3800.0, 14.0], [3900.0, 7.0], [4000.0, 4.0], [4300.0, 4.0], [4100.0, 7.0], [4200.0, 4.0], [4500.0, 5.0], [4400.0, 4.0], [4600.0, 1.0], [4700.0, 3.0], [4900.0, 3.0], [5000.0, 4.0], [5100.0, 2.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 2.0], [5700.0, 1.0], [5800.0, 2.0], [6000.0, 3.0], [6100.0, 3.0], [6300.0, 2.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [7100.0, 1.0], [7400.0, 1.0], [8300.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9400.0, 1.0], [10200.0, 1.0], [10100.0, 1.0], [10600.0, 1.0], [10800.0, 1.0], [11200.0, 1.0], [11100.0, 1.0], [12200.0, 1.0], [13000.0, 1.0], [13800.0, 1.0], [14300.0, 1.0], [14400.0, 1.0], [15600.0, 1.0], [15400.0, 1.0], [16200.0, 1.0], [16900.0, 1.0], [18400.0, 1.0], [22400.0, 1.0], [21600.0, 1.0], [24200.0, 2.0], [26300.0, 1.0], [26500.0, 1.0], [38300.0, 1.0], [41400.0, 1.0], [47700.0, 1.0], [200.0, 970.0], [60400.0, 1.0], [64000.0, 9.0], [300.0, 1172.0], [400.0, 507.0], [500.0, 411.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2651.0, "series": [{"data": [[0.0, 2651.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1689.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 841.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 9.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.463414634146341, "minX": 1.60283754E12, "maxY": 10.0, "series": [{"data": [[1.6028379E12, 10.0], [1.60283772E12, 10.0], [1.60283802E12, 10.0], [1.60283754E12, 10.0], [1.60283784E12, 10.0], [1.60283766E12, 10.0], [1.60283796E12, 10.0], [1.60283778E12, 10.0], [1.6028376E12, 10.0], [1.60283808E12, 9.463414634146341]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283808E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 316.0, "minX": 1.0, "maxY": 41439.0, "series": [{"data": [[8.0, 1392.0], [4.0, 2741.0], [2.0, 2287.0], [1.0, 5435.0], [10.0, 1004.0038595136988], [5.0, 612.0], [6.0, 316.0], [3.0, 41439.0], [7.0, 330.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 1012.9672447013463]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 624.1833333333333, "minX": 1.60283754E12, "maxY": 3777096.7, "series": [{"data": [[1.6028379E12, 2519214.8833333333], [1.60283772E12, 3625947.316666667], [1.60283802E12, 3121360.433333333], [1.60283754E12, 1940238.9333333333], [1.60283784E12, 3140288.533333333], [1.60283766E12, 3639209.6166666667], [1.60283796E12, 3777096.7], [1.60283778E12, 2995282.4166666665], [1.6028376E12, 2361477.716666667], [1.60283808E12, 430520.0833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028379E12, 4269.716666666666], [1.60283772E12, 4670.766666666666], [1.60283802E12, 4641.866666666667], [1.60283754E12, 2079.9], [1.60283784E12, 3981.733333333333], [1.60283766E12, 4836.833333333333], [1.60283796E12, 5155.116666666667], [1.60283778E12, 4026.25], [1.6028376E12, 4290.966666666666], [1.60283808E12, 624.1833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283808E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 896.7735294117648, "minX": 1.60283754E12, "maxY": 2256.646341463415, "series": [{"data": [[1.6028379E12, 1039.1230769230751], [1.60283772E12, 1008.2569105691065], [1.60283802E12, 927.7931596091204], [1.60283754E12, 1071.766550522648], [1.60283784E12, 1095.7945945945955], [1.60283766E12, 985.4744976816077], [1.60283796E12, 896.7735294117648], [1.60283778E12, 1032.1573033707868], [1.6028376E12, 948.0236886632829], [1.60283808E12, 2256.646341463415]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283808E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 895.2308823529412, "minX": 1.60283754E12, "maxY": 2255.4268292682927, "series": [{"data": [[1.6028379E12, 1038.0017094017096], [1.60283772E12, 1005.9333333333327], [1.60283802E12, 926.2052117263845], [1.60283754E12, 1069.435540069686], [1.60283784E12, 1094.2792792792786], [1.60283766E12, 983.1885625966013], [1.60283796E12, 895.2308823529412], [1.60283778E12, 1030.1273408239697], [1.6028376E12, 946.5296108291025], [1.60283808E12, 2255.4268292682927]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283808E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008547008547008548, "minX": 1.60283754E12, "maxY": 0.25087108013937304, "series": [{"data": [[1.6028379E12, 0.008547008547008548], [1.60283772E12, 0.017886178861788584], [1.60283802E12, 0.014657980456026076], [1.60283754E12, 0.25087108013937304], [1.60283784E12, 0.012612612612612602], [1.60283766E12, 0.015455950540958257], [1.60283796E12, 0.010294117647058834], [1.60283778E12, 0.018726591760299637], [1.6028376E12, 0.011844331641285967], [1.60283808E12, 0.024390243902439025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283808E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 223.0, "minX": 1.60283754E12, "maxY": 60455.0, "series": [{"data": [[1.6028379E12, 5872.0], [1.60283772E12, 18416.0], [1.60283802E12, 60455.0], [1.60283754E12, 24277.0], [1.60283784E12, 14439.0], [1.60283766E12, 47769.0], [1.60283796E12, 6285.0], [1.60283778E12, 26500.0], [1.6028376E12, 13032.0], [1.60283808E12, 41439.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028379E12, 234.0], [1.60283772E12, 229.53499985337257], [1.60283802E12, 233.53499985337257], [1.60283754E12, 233.0], [1.60283784E12, 234.0], [1.60283766E12, 232.0], [1.60283796E12, 226.22199967622757], [1.60283778E12, 227.0], [1.6028376E12, 232.0], [1.60283808E12, 240.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028379E12, 234.0], [1.60283772E12, 230.0], [1.60283802E12, 234.08850005865096], [1.60283754E12, 233.0], [1.60283784E12, 234.0], [1.60283766E12, 232.40530006170272], [1.60283796E12, 227.44420012950897], [1.60283778E12, 227.29650005102158], [1.6028376E12, 232.0], [1.60283808E12, 240.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028379E12, 234.0], [1.60283772E12, 229.8424999266863], [1.60283802E12, 233.8424999266863], [1.60283754E12, 233.0], [1.60283784E12, 234.0], [1.60283766E12, 232.14649992287158], [1.60283796E12, 226.9009998381138], [1.60283778E12, 227.08249993622303], [1.6028376E12, 232.0], [1.60283808E12, 240.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028379E12, 225.0], [1.60283772E12, 227.0], [1.60283802E12, 227.0], [1.60283754E12, 232.0], [1.60283784E12, 229.0], [1.60283766E12, 225.0], [1.60283796E12, 224.0], [1.60283778E12, 223.0], [1.6028376E12, 225.0], [1.60283808E12, 240.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028379E12, 459.0], [1.60283772E12, 426.5], [1.60283802E12, 459.0], [1.60283754E12, 604.0], [1.60283784E12, 575.0], [1.60283766E12, 394.0], [1.60283796E12, 375.5], [1.60283778E12, 496.5], [1.6028376E12, 540.0], [1.60283808E12, 816.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283808E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 246.0, "minX": 1.0, "maxY": 64066.0, "series": [{"data": [[2.0, 1633.0], [3.0, 1064.5], [4.0, 1184.5], [5.0, 813.5], [6.0, 752.0], [7.0, 765.0], [8.0, 662.0], [9.0, 573.5], [10.0, 547.0], [11.0, 554.5], [12.0, 530.0], [13.0, 441.0], [14.0, 460.5], [15.0, 462.0], [16.0, 331.0], [1.0, 988.0], [17.0, 327.0], [18.0, 292.5], [19.0, 282.0], [20.0, 276.0], [21.0, 277.0], [22.0, 252.5], [23.0, 257.0], [24.0, 250.5], [25.0, 264.0], [26.0, 249.0], [27.0, 256.5], [28.0, 246.0], [29.0, 271.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64065.0], [5.0, 64065.0], [10.0, 64065.0], [12.0, 64066.0], [14.0, 64064.5], [29.0, 64066.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 246.0, "minX": 1.0, "maxY": 64065.0, "series": [{"data": [[2.0, 1630.5], [3.0, 1062.5], [4.0, 1176.5], [5.0, 812.5], [6.0, 751.0], [7.0, 763.0], [8.0, 660.5], [9.0, 571.5], [10.0, 543.0], [11.0, 554.0], [12.0, 530.0], [13.0, 441.0], [14.0, 460.0], [15.0, 462.0], [16.0, 331.0], [1.0, 985.0], [17.0, 327.0], [18.0, 292.5], [19.0, 282.0], [20.0, 276.0], [21.0, 277.0], [22.0, 252.5], [23.0, 257.0], [24.0, 250.5], [25.0, 264.0], [26.0, 249.0], [27.0, 256.0], [28.0, 246.0], [29.0, 271.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 64064.5], [5.0, 64064.5], [10.0, 64065.0], [12.0, 64065.0], [14.0, 64064.5], [29.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60283754E12, "maxY": 11.333333333333334, "series": [{"data": [[1.6028379E12, 9.75], [1.60283772E12, 10.25], [1.60283802E12, 10.233333333333333], [1.60283754E12, 4.95], [1.60283784E12, 9.25], [1.60283766E12, 10.783333333333333], [1.60283796E12, 11.333333333333334], [1.60283778E12, 8.9], [1.6028376E12, 9.85], [1.60283808E12, 1.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283808E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283754E12, "maxY": 11.3, "series": [{"data": [[1.6028379E12, 9.716666666666667], [1.60283772E12, 10.233333333333333], [1.60283802E12, 10.233333333333333], [1.60283754E12, 4.783333333333333], [1.60283784E12, 9.216666666666667], [1.60283766E12, 10.766666666666667], [1.60283796E12, 11.3], [1.60283778E12, 8.9], [1.6028376E12, 9.833333333333334], [1.60283808E12, 1.3666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6028379E12, 0.03333333333333333], [1.60283772E12, 0.016666666666666666], [1.60283784E12, 0.03333333333333333], [1.60283766E12, 0.016666666666666666], [1.60283796E12, 0.03333333333333333], [1.6028376E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283808E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283754E12, "maxY": 11.3, "series": [{"data": [[1.6028379E12, 9.716666666666667], [1.60283772E12, 10.233333333333333], [1.60283802E12, 10.233333333333333], [1.60283754E12, 4.783333333333333], [1.60283784E12, 9.216666666666667], [1.60283766E12, 10.766666666666667], [1.60283796E12, 11.3], [1.60283778E12, 8.9], [1.6028376E12, 9.833333333333334], [1.60283808E12, 1.3666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6028379E12, 0.03333333333333333], [1.60283772E12, 0.016666666666666666], [1.60283784E12, 0.03333333333333333], [1.60283766E12, 0.016666666666666666], [1.60283796E12, 0.03333333333333333], [1.6028376E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283808E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283754E12, "maxY": 11.3, "series": [{"data": [[1.6028379E12, 9.716666666666667], [1.60283772E12, 10.233333333333333], [1.60283802E12, 10.233333333333333], [1.60283754E12, 4.783333333333333], [1.60283784E12, 9.216666666666667], [1.60283766E12, 10.766666666666667], [1.60283796E12, 11.3], [1.60283778E12, 8.9], [1.6028376E12, 9.833333333333334], [1.60283808E12, 1.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6028379E12, 0.03333333333333333], [1.60283772E12, 0.016666666666666666], [1.60283784E12, 0.03333333333333333], [1.60283766E12, 0.016666666666666666], [1.60283796E12, 0.03333333333333333], [1.6028376E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283808E12, "title": "Total Transactions Per Second"}},
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

