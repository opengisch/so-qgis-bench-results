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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 7497.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 5.0], [0.3, 12.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 14.0], [0.8, 15.0], [0.9, 17.0], [1.0, 19.0], [1.1, 21.0], [1.2, 22.0], [1.3, 26.0], [1.4, 27.0], [1.5, 27.0], [1.6, 29.0], [1.7, 30.0], [1.8, 30.0], [1.9, 31.0], [2.0, 34.0], [2.1, 37.0], [2.2, 40.0], [2.3, 42.0], [2.4, 44.0], [2.5, 48.0], [2.6, 49.0], [2.7, 53.0], [2.8, 57.0], [2.9, 60.0], [3.0, 64.0], [3.1, 68.0], [3.2, 72.0], [3.3, 77.0], [3.4, 83.0], [3.5, 86.0], [3.6, 90.0], [3.7, 97.0], [3.8, 103.0], [3.9, 110.0], [4.0, 117.0], [4.1, 120.0], [4.2, 122.0], [4.3, 123.0], [4.4, 124.0], [4.5, 126.0], [4.6, 127.0], [4.7, 129.0], [4.8, 130.0], [4.9, 131.0], [5.0, 132.0], [5.1, 133.0], [5.2, 134.0], [5.3, 135.0], [5.4, 135.0], [5.5, 136.0], [5.6, 137.0], [5.7, 137.0], [5.8, 138.0], [5.9, 139.0], [6.0, 140.0], [6.1, 141.0], [6.2, 142.0], [6.3, 143.0], [6.4, 144.0], [6.5, 144.0], [6.6, 145.0], [6.7, 146.0], [6.8, 146.0], [6.9, 147.0], [7.0, 148.0], [7.1, 148.0], [7.2, 149.0], [7.3, 149.0], [7.4, 150.0], [7.5, 150.0], [7.6, 151.0], [7.7, 151.0], [7.8, 152.0], [7.9, 152.0], [8.0, 153.0], [8.1, 153.0], [8.2, 153.0], [8.3, 154.0], [8.4, 154.0], [8.5, 155.0], [8.6, 156.0], [8.7, 156.0], [8.8, 157.0], [8.9, 157.0], [9.0, 158.0], [9.1, 158.0], [9.2, 159.0], [9.3, 159.0], [9.4, 159.0], [9.5, 160.0], [9.6, 160.0], [9.7, 161.0], [9.8, 161.0], [9.9, 162.0], [10.0, 163.0], [10.1, 163.0], [10.2, 164.0], [10.3, 164.0], [10.4, 165.0], [10.5, 165.0], [10.6, 166.0], [10.7, 166.0], [10.8, 166.0], [10.9, 167.0], [11.0, 167.0], [11.1, 168.0], [11.2, 168.0], [11.3, 168.0], [11.4, 170.0], [11.5, 171.0], [11.6, 171.0], [11.7, 172.0], [11.8, 172.0], [11.9, 173.0], [12.0, 173.0], [12.1, 174.0], [12.2, 174.0], [12.3, 175.0], [12.4, 175.0], [12.5, 176.0], [12.6, 177.0], [12.7, 177.0], [12.8, 178.0], [12.9, 178.0], [13.0, 178.0], [13.1, 179.0], [13.2, 179.0], [13.3, 179.0], [13.4, 180.0], [13.5, 181.0], [13.6, 181.0], [13.7, 182.0], [13.8, 182.0], [13.9, 183.0], [14.0, 183.0], [14.1, 183.0], [14.2, 184.0], [14.3, 184.0], [14.4, 185.0], [14.5, 185.0], [14.6, 185.0], [14.7, 186.0], [14.8, 186.0], [14.9, 187.0], [15.0, 187.0], [15.1, 187.0], [15.2, 187.0], [15.3, 188.0], [15.4, 189.0], [15.5, 189.0], [15.6, 190.0], [15.7, 190.0], [15.8, 190.0], [15.9, 191.0], [16.0, 192.0], [16.1, 192.0], [16.2, 192.0], [16.3, 192.0], [16.4, 193.0], [16.5, 194.0], [16.6, 194.0], [16.7, 195.0], [16.8, 195.0], [16.9, 195.0], [17.0, 196.0], [17.1, 196.0], [17.2, 197.0], [17.3, 197.0], [17.4, 198.0], [17.5, 198.0], [17.6, 198.0], [17.7, 198.0], [17.8, 199.0], [17.9, 199.0], [18.0, 199.0], [18.1, 200.0], [18.2, 200.0], [18.3, 200.0], [18.4, 201.0], [18.5, 201.0], [18.6, 201.0], [18.7, 202.0], [18.8, 202.0], [18.9, 203.0], [19.0, 203.0], [19.1, 204.0], [19.2, 204.0], [19.3, 205.0], [19.4, 206.0], [19.5, 206.0], [19.6, 207.0], [19.7, 207.0], [19.8, 207.0], [19.9, 208.0], [20.0, 209.0], [20.1, 209.0], [20.2, 209.0], [20.3, 210.0], [20.4, 211.0], [20.5, 211.0], [20.6, 212.0], [20.7, 212.0], [20.8, 213.0], [20.9, 213.0], [21.0, 214.0], [21.1, 214.0], [21.2, 214.0], [21.3, 215.0], [21.4, 215.0], [21.5, 216.0], [21.6, 217.0], [21.7, 217.0], [21.8, 217.0], [21.9, 218.0], [22.0, 219.0], [22.1, 220.0], [22.2, 220.0], [22.3, 220.0], [22.4, 221.0], [22.5, 221.0], [22.6, 222.0], [22.7, 222.0], [22.8, 222.0], [22.9, 223.0], [23.0, 223.0], [23.1, 224.0], [23.2, 224.0], [23.3, 225.0], [23.4, 225.0], [23.5, 226.0], [23.6, 226.0], [23.7, 227.0], [23.8, 228.0], [23.9, 228.0], [24.0, 228.0], [24.1, 229.0], [24.2, 229.0], [24.3, 229.0], [24.4, 229.0], [24.5, 230.0], [24.6, 230.0], [24.7, 230.0], [24.8, 231.0], [24.9, 231.0], [25.0, 232.0], [25.1, 232.0], [25.2, 233.0], [25.3, 234.0], [25.4, 234.0], [25.5, 234.0], [25.6, 235.0], [25.7, 236.0], [25.8, 236.0], [25.9, 237.0], [26.0, 237.0], [26.1, 238.0], [26.2, 238.0], [26.3, 239.0], [26.4, 239.0], [26.5, 240.0], [26.6, 240.0], [26.7, 241.0], [26.8, 242.0], [26.9, 242.0], [27.0, 242.0], [27.1, 242.0], [27.2, 243.0], [27.3, 243.0], [27.4, 243.0], [27.5, 244.0], [27.6, 244.0], [27.7, 244.0], [27.8, 245.0], [27.9, 245.0], [28.0, 246.0], [28.1, 246.0], [28.2, 247.0], [28.3, 247.0], [28.4, 247.0], [28.5, 248.0], [28.6, 248.0], [28.7, 249.0], [28.8, 249.0], [28.9, 250.0], [29.0, 250.0], [29.1, 251.0], [29.2, 251.0], [29.3, 252.0], [29.4, 252.0], [29.5, 252.0], [29.6, 253.0], [29.7, 254.0], [29.8, 254.0], [29.9, 255.0], [30.0, 255.0], [30.1, 255.0], [30.2, 256.0], [30.3, 256.0], [30.4, 256.0], [30.5, 257.0], [30.6, 257.0], [30.7, 258.0], [30.8, 258.0], [30.9, 258.0], [31.0, 258.0], [31.1, 259.0], [31.2, 259.0], [31.3, 259.0], [31.4, 260.0], [31.5, 260.0], [31.6, 261.0], [31.7, 261.0], [31.8, 262.0], [31.9, 262.0], [32.0, 262.0], [32.1, 263.0], [32.2, 263.0], [32.3, 264.0], [32.4, 264.0], [32.5, 264.0], [32.6, 265.0], [32.7, 265.0], [32.8, 265.0], [32.9, 266.0], [33.0, 266.0], [33.1, 267.0], [33.2, 267.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 268.0], [33.7, 269.0], [33.8, 269.0], [33.9, 270.0], [34.0, 270.0], [34.1, 270.0], [34.2, 271.0], [34.3, 271.0], [34.4, 271.0], [34.5, 271.0], [34.6, 272.0], [34.7, 272.0], [34.8, 273.0], [34.9, 273.0], [35.0, 273.0], [35.1, 273.0], [35.2, 274.0], [35.3, 274.0], [35.4, 274.0], [35.5, 275.0], [35.6, 275.0], [35.7, 275.0], [35.8, 276.0], [35.9, 276.0], [36.0, 276.0], [36.1, 276.0], [36.2, 277.0], [36.3, 277.0], [36.4, 278.0], [36.5, 278.0], [36.6, 278.0], [36.7, 278.0], [36.8, 279.0], [36.9, 279.0], [37.0, 279.0], [37.1, 279.0], [37.2, 280.0], [37.3, 280.0], [37.4, 281.0], [37.5, 281.0], [37.6, 282.0], [37.7, 282.0], [37.8, 282.0], [37.9, 283.0], [38.0, 283.0], [38.1, 284.0], [38.2, 284.0], [38.3, 284.0], [38.4, 284.0], [38.5, 285.0], [38.6, 285.0], [38.7, 286.0], [38.8, 286.0], [38.9, 287.0], [39.0, 287.0], [39.1, 287.0], [39.2, 287.0], [39.3, 288.0], [39.4, 288.0], [39.5, 289.0], [39.6, 290.0], [39.7, 290.0], [39.8, 290.0], [39.9, 291.0], [40.0, 291.0], [40.1, 292.0], [40.2, 292.0], [40.3, 293.0], [40.4, 293.0], [40.5, 293.0], [40.6, 293.0], [40.7, 294.0], [40.8, 294.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 295.0], [41.3, 296.0], [41.4, 296.0], [41.5, 296.0], [41.6, 297.0], [41.7, 297.0], [41.8, 297.0], [41.9, 298.0], [42.0, 298.0], [42.1, 298.0], [42.2, 298.0], [42.3, 299.0], [42.4, 299.0], [42.5, 300.0], [42.6, 300.0], [42.7, 300.0], [42.8, 301.0], [42.9, 301.0], [43.0, 301.0], [43.1, 302.0], [43.2, 302.0], [43.3, 303.0], [43.4, 303.0], [43.5, 303.0], [43.6, 304.0], [43.7, 304.0], [43.8, 305.0], [43.9, 305.0], [44.0, 305.0], [44.1, 306.0], [44.2, 306.0], [44.3, 307.0], [44.4, 307.0], [44.5, 308.0], [44.6, 308.0], [44.7, 308.0], [44.8, 309.0], [44.9, 309.0], [45.0, 310.0], [45.1, 310.0], [45.2, 311.0], [45.3, 311.0], [45.4, 311.0], [45.5, 312.0], [45.6, 312.0], [45.7, 313.0], [45.8, 313.0], [45.9, 314.0], [46.0, 314.0], [46.1, 314.0], [46.2, 315.0], [46.3, 315.0], [46.4, 316.0], [46.5, 316.0], [46.6, 316.0], [46.7, 317.0], [46.8, 318.0], [46.9, 318.0], [47.0, 319.0], [47.1, 319.0], [47.2, 320.0], [47.3, 320.0], [47.4, 320.0], [47.5, 321.0], [47.6, 322.0], [47.7, 322.0], [47.8, 322.0], [47.9, 323.0], [48.0, 323.0], [48.1, 323.0], [48.2, 323.0], [48.3, 324.0], [48.4, 324.0], [48.5, 325.0], [48.6, 325.0], [48.7, 326.0], [48.8, 326.0], [48.9, 327.0], [49.0, 327.0], [49.1, 327.0], [49.2, 328.0], [49.3, 328.0], [49.4, 329.0], [49.5, 330.0], [49.6, 330.0], [49.7, 330.0], [49.8, 330.0], [49.9, 331.0], [50.0, 331.0], [50.1, 332.0], [50.2, 332.0], [50.3, 333.0], [50.4, 333.0], [50.5, 334.0], [50.6, 334.0], [50.7, 335.0], [50.8, 335.0], [50.9, 336.0], [51.0, 336.0], [51.1, 337.0], [51.2, 337.0], [51.3, 337.0], [51.4, 338.0], [51.5, 338.0], [51.6, 338.0], [51.7, 339.0], [51.8, 339.0], [51.9, 339.0], [52.0, 339.0], [52.1, 340.0], [52.2, 340.0], [52.3, 340.0], [52.4, 341.0], [52.5, 341.0], [52.6, 342.0], [52.7, 342.0], [52.8, 342.0], [52.9, 343.0], [53.0, 343.0], [53.1, 343.0], [53.2, 344.0], [53.3, 344.0], [53.4, 344.0], [53.5, 345.0], [53.6, 345.0], [53.7, 345.0], [53.8, 346.0], [53.9, 346.0], [54.0, 346.0], [54.1, 347.0], [54.2, 347.0], [54.3, 348.0], [54.4, 348.0], [54.5, 349.0], [54.6, 349.0], [54.7, 350.0], [54.8, 350.0], [54.9, 351.0], [55.0, 351.0], [55.1, 351.0], [55.2, 351.0], [55.3, 352.0], [55.4, 352.0], [55.5, 353.0], [55.6, 353.0], [55.7, 353.0], [55.8, 354.0], [55.9, 354.0], [56.0, 354.0], [56.1, 355.0], [56.2, 355.0], [56.3, 356.0], [56.4, 356.0], [56.5, 356.0], [56.6, 356.0], [56.7, 357.0], [56.8, 357.0], [56.9, 358.0], [57.0, 358.0], [57.1, 358.0], [57.2, 359.0], [57.3, 359.0], [57.4, 360.0], [57.5, 360.0], [57.6, 360.0], [57.7, 361.0], [57.8, 361.0], [57.9, 362.0], [58.0, 363.0], [58.1, 363.0], [58.2, 364.0], [58.3, 364.0], [58.4, 364.0], [58.5, 365.0], [58.6, 365.0], [58.7, 366.0], [58.8, 366.0], [58.9, 367.0], [59.0, 367.0], [59.1, 368.0], [59.2, 368.0], [59.3, 369.0], [59.4, 369.0], [59.5, 370.0], [59.6, 370.0], [59.7, 371.0], [59.8, 371.0], [59.9, 372.0], [60.0, 372.0], [60.1, 373.0], [60.2, 373.0], [60.3, 374.0], [60.4, 374.0], [60.5, 375.0], [60.6, 375.0], [60.7, 375.0], [60.8, 376.0], [60.9, 377.0], [61.0, 377.0], [61.1, 377.0], [61.2, 378.0], [61.3, 378.0], [61.4, 378.0], [61.5, 379.0], [61.6, 379.0], [61.7, 379.0], [61.8, 380.0], [61.9, 381.0], [62.0, 381.0], [62.1, 382.0], [62.2, 382.0], [62.3, 382.0], [62.4, 383.0], [62.5, 384.0], [62.6, 384.0], [62.7, 384.0], [62.8, 385.0], [62.9, 386.0], [63.0, 387.0], [63.1, 387.0], [63.2, 388.0], [63.3, 388.0], [63.4, 389.0], [63.5, 389.0], [63.6, 390.0], [63.7, 390.0], [63.8, 391.0], [63.9, 391.0], [64.0, 392.0], [64.1, 392.0], [64.2, 393.0], [64.3, 394.0], [64.4, 394.0], [64.5, 395.0], [64.6, 396.0], [64.7, 396.0], [64.8, 397.0], [64.9, 397.0], [65.0, 398.0], [65.1, 398.0], [65.2, 399.0], [65.3, 400.0], [65.4, 400.0], [65.5, 400.0], [65.6, 401.0], [65.7, 401.0], [65.8, 402.0], [65.9, 402.0], [66.0, 403.0], [66.1, 404.0], [66.2, 404.0], [66.3, 405.0], [66.4, 405.0], [66.5, 405.0], [66.6, 407.0], [66.7, 407.0], [66.8, 407.0], [66.9, 408.0], [67.0, 409.0], [67.1, 409.0], [67.2, 411.0], [67.3, 411.0], [67.4, 413.0], [67.5, 413.0], [67.6, 414.0], [67.7, 414.0], [67.8, 415.0], [67.9, 415.0], [68.0, 416.0], [68.1, 417.0], [68.2, 417.0], [68.3, 417.0], [68.4, 418.0], [68.5, 419.0], [68.6, 419.0], [68.7, 420.0], [68.8, 421.0], [68.9, 422.0], [69.0, 422.0], [69.1, 422.0], [69.2, 423.0], [69.3, 423.0], [69.4, 424.0], [69.5, 425.0], [69.6, 426.0], [69.7, 426.0], [69.8, 426.0], [69.9, 427.0], [70.0, 427.0], [70.1, 429.0], [70.2, 430.0], [70.3, 431.0], [70.4, 431.0], [70.5, 432.0], [70.6, 432.0], [70.7, 433.0], [70.8, 435.0], [70.9, 435.0], [71.0, 436.0], [71.1, 436.0], [71.2, 437.0], [71.3, 437.0], [71.4, 438.0], [71.5, 439.0], [71.6, 439.0], [71.7, 440.0], [71.8, 441.0], [71.9, 442.0], [72.0, 442.0], [72.1, 442.0], [72.2, 443.0], [72.3, 443.0], [72.4, 444.0], [72.5, 444.0], [72.6, 445.0], [72.7, 445.0], [72.8, 446.0], [72.9, 447.0], [73.0, 448.0], [73.1, 448.0], [73.2, 449.0], [73.3, 450.0], [73.4, 450.0], [73.5, 451.0], [73.6, 451.0], [73.7, 453.0], [73.8, 453.0], [73.9, 454.0], [74.0, 455.0], [74.1, 455.0], [74.2, 456.0], [74.3, 457.0], [74.4, 458.0], [74.5, 458.0], [74.6, 459.0], [74.7, 460.0], [74.8, 461.0], [74.9, 461.0], [75.0, 462.0], [75.1, 463.0], [75.2, 464.0], [75.3, 465.0], [75.4, 465.0], [75.5, 466.0], [75.6, 467.0], [75.7, 467.0], [75.8, 468.0], [75.9, 468.0], [76.0, 469.0], [76.1, 470.0], [76.2, 471.0], [76.3, 472.0], [76.4, 473.0], [76.5, 473.0], [76.6, 474.0], [76.7, 474.0], [76.8, 475.0], [76.9, 476.0], [77.0, 477.0], [77.1, 478.0], [77.2, 478.0], [77.3, 479.0], [77.4, 480.0], [77.5, 481.0], [77.6, 481.0], [77.7, 482.0], [77.8, 483.0], [77.9, 484.0], [78.0, 484.0], [78.1, 485.0], [78.2, 485.0], [78.3, 486.0], [78.4, 486.0], [78.5, 487.0], [78.6, 488.0], [78.7, 489.0], [78.8, 490.0], [78.9, 491.0], [79.0, 493.0], [79.1, 494.0], [79.2, 495.0], [79.3, 496.0], [79.4, 497.0], [79.5, 498.0], [79.6, 499.0], [79.7, 500.0], [79.8, 501.0], [79.9, 502.0], [80.0, 503.0], [80.1, 504.0], [80.2, 504.0], [80.3, 505.0], [80.4, 507.0], [80.5, 507.0], [80.6, 510.0], [80.7, 510.0], [80.8, 510.0], [80.9, 511.0], [81.0, 512.0], [81.1, 514.0], [81.2, 515.0], [81.3, 516.0], [81.4, 517.0], [81.5, 518.0], [81.6, 519.0], [81.7, 520.0], [81.8, 520.0], [81.9, 521.0], [82.0, 522.0], [82.1, 523.0], [82.2, 524.0], [82.3, 525.0], [82.4, 526.0], [82.5, 527.0], [82.6, 528.0], [82.7, 530.0], [82.8, 531.0], [82.9, 531.0], [83.0, 532.0], [83.1, 533.0], [83.2, 534.0], [83.3, 534.0], [83.4, 535.0], [83.5, 536.0], [83.6, 538.0], [83.7, 539.0], [83.8, 539.0], [83.9, 540.0], [84.0, 541.0], [84.1, 541.0], [84.2, 542.0], [84.3, 543.0], [84.4, 544.0], [84.5, 545.0], [84.6, 546.0], [84.7, 547.0], [84.8, 549.0], [84.9, 549.0], [85.0, 551.0], [85.1, 552.0], [85.2, 553.0], [85.3, 554.0], [85.4, 556.0], [85.5, 557.0], [85.6, 558.0], [85.7, 559.0], [85.8, 560.0], [85.9, 561.0], [86.0, 563.0], [86.1, 566.0], [86.2, 566.0], [86.3, 568.0], [86.4, 570.0], [86.5, 572.0], [86.6, 574.0], [86.7, 576.0], [86.8, 578.0], [86.9, 580.0], [87.0, 582.0], [87.1, 585.0], [87.2, 588.0], [87.3, 589.0], [87.4, 591.0], [87.5, 593.0], [87.6, 594.0], [87.7, 596.0], [87.8, 600.0], [87.9, 603.0], [88.0, 604.0], [88.1, 606.0], [88.2, 608.0], [88.3, 610.0], [88.4, 613.0], [88.5, 615.0], [88.6, 616.0], [88.7, 617.0], [88.8, 619.0], [88.9, 621.0], [89.0, 623.0], [89.1, 626.0], [89.2, 629.0], [89.3, 630.0], [89.4, 633.0], [89.5, 638.0], [89.6, 643.0], [89.7, 647.0], [89.8, 651.0], [89.9, 654.0], [90.0, 657.0], [90.1, 661.0], [90.2, 662.0], [90.3, 665.0], [90.4, 668.0], [90.5, 670.0], [90.6, 673.0], [90.7, 675.0], [90.8, 678.0], [90.9, 682.0], [91.0, 687.0], [91.1, 689.0], [91.2, 694.0], [91.3, 697.0], [91.4, 701.0], [91.5, 703.0], [91.6, 709.0], [91.7, 712.0], [91.8, 715.0], [91.9, 716.0], [92.0, 718.0], [92.1, 721.0], [92.2, 724.0], [92.3, 730.0], [92.4, 732.0], [92.5, 735.0], [92.6, 738.0], [92.7, 740.0], [92.8, 744.0], [92.9, 748.0], [93.0, 754.0], [93.1, 764.0], [93.2, 769.0], [93.3, 773.0], [93.4, 777.0], [93.5, 783.0], [93.6, 785.0], [93.7, 791.0], [93.8, 793.0], [93.9, 800.0], [94.0, 806.0], [94.1, 813.0], [94.2, 820.0], [94.3, 827.0], [94.4, 833.0], [94.5, 838.0], [94.6, 842.0], [94.7, 846.0], [94.8, 861.0], [94.9, 863.0], [95.0, 873.0], [95.1, 884.0], [95.2, 900.0], [95.3, 911.0], [95.4, 919.0], [95.5, 928.0], [95.6, 934.0], [95.7, 943.0], [95.8, 948.0], [95.9, 960.0], [96.0, 974.0], [96.1, 980.0], [96.2, 988.0], [96.3, 996.0], [96.4, 1021.0], [96.5, 1040.0], [96.6, 1070.0], [96.7, 1099.0], [96.8, 1133.0], [96.9, 1155.0], [97.0, 1174.0], [97.1, 1200.0], [97.2, 1232.0], [97.3, 1268.0], [97.4, 1321.0], [97.5, 1356.0], [97.6, 1382.0], [97.7, 1410.0], [97.8, 1455.0], [97.9, 1517.0], [98.0, 1535.0], [98.1, 1545.0], [98.2, 1574.0], [98.3, 1584.0], [98.4, 1594.0], [98.5, 1640.0], [98.6, 1684.0], [98.7, 1708.0], [98.8, 1743.0], [98.9, 1827.0], [99.0, 1875.0], [99.1, 2016.0], [99.2, 2066.0], [99.3, 2299.0], [99.4, 2875.0], [99.5, 3050.0], [99.6, 3582.0], [99.7, 3853.0], [99.8, 3946.0], [99.9, 5549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1270.0, "series": [{"data": [[0.0, 194.0], [600.0, 186.0], [700.0, 131.0], [800.0, 67.0], [900.0, 58.0], [1000.0, 21.0], [1100.0, 20.0], [1200.0, 14.0], [1300.0, 17.0], [1400.0, 9.0], [1500.0, 28.0], [100.0, 741.0], [1600.0, 13.0], [1700.0, 10.0], [1800.0, 9.0], [1900.0, 4.0], [2000.0, 6.0], [2100.0, 3.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 1.0], [200.0, 1270.0], [3200.0, 1.0], [3300.0, 1.0], [3500.0, 3.0], [3700.0, 1.0], [3800.0, 5.0], [3900.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [300.0, 1183.0], [5500.0, 2.0], [5900.0, 1.0], [6200.0, 1.0], [400.0, 748.0], [6600.0, 2.0], [7400.0, 1.0], [500.0, 420.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 111.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4138.0, "series": [{"data": [[0.0, 4138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 941.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 111.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.828244274809158, "minX": 1.60506078E12, "maxY": 10.0, "series": [{"data": [[1.60506102E12, 9.828244274809158], [1.60506084E12, 10.0], [1.60506096E12, 10.0], [1.60506078E12, 9.993720565149147], [1.6050609E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506102E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 247.0, "minX": 1.0, "maxY": 594.0, "series": [{"data": [[8.0, 456.0], [4.0, 278.0], [2.0, 353.0], [1.0, 594.0], [9.0, 523.3333333333334], [10.0, 409.0083043646189], [5.0, 320.0], [6.0, 247.0], [3.0, 352.0], [7.0, 267.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99055876685938, 409.00539499036563]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1821.9, "minX": 1.60506078E12, "maxY": 1.01777822E7, "series": [{"data": [[1.60506102E12, 2108960.0166666666], [1.60506084E12, 9072151.866666667], [1.60506096E12, 9990978.583333334], [1.60506078E12, 4627626.183333334], [1.6050609E12, 1.01777822E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506102E12, 1821.9], [1.60506084E12, 8745.35], [1.60506096E12, 9978.4], [1.60506078E12, 4220.7], [1.6050609E12, 10377.416666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506102E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 363.6609105180532, "minX": 1.60506078E12, "maxY": 460.9675425038639, "series": [{"data": [[1.60506102E12, 375.3282442748092], [1.60506084E12, 460.9675425038639], [1.60506096E12, 412.4060150375946], [1.60506078E12, 363.6609105180532], [1.6050609E12, 386.5110821382001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506102E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 359.9890109890113, "minX": 1.60506078E12, "maxY": 456.7465224111284, "series": [{"data": [[1.60506102E12, 370.9160305343512], [1.60506084E12, 456.7465224111284], [1.60506096E12, 408.28503075871555], [1.60506078E12, 359.9890109890113], [1.6050609E12, 381.700130378097]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506102E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004101161995898841, "minX": 1.60506078E12, "maxY": 0.14442700156985863, "series": [{"data": [[1.60506102E12, 0.015267175572519089], [1.60506084E12, 0.009273570324574975], [1.60506096E12, 0.004101161995898841], [1.60506078E12, 0.14442700156985863], [1.6050609E12, 0.008474576271186446]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506102E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60506078E12, "maxY": 7497.0, "series": [{"data": [[1.60506102E12, 2240.0], [1.60506084E12, 7497.0], [1.60506096E12, 6696.0], [1.60506078E12, 3880.0], [1.6050609E12, 3941.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506102E12, 134.0], [1.60506084E12, 14.65499969124794], [1.60506096E12, 14.5279989528656], [1.60506078E12, 124.0], [1.6050609E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506102E12, 134.0], [1.60506084E12, 15.0], [1.60506096E12, 17.0], [1.60506078E12, 124.0], [1.6050609E12, 15.589500439167024]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506102E12, 134.0], [1.60506084E12, 15.0], [1.60506096E12, 16.723999476432798], [1.60506078E12, 124.0], [1.6050609E12, 14.582499817013739]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506102E12, 122.0], [1.60506084E12, 2.0], [1.60506096E12, 2.0], [1.60506078E12, 38.0], [1.6050609E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506102E12, 331.5], [1.60506084E12, 344.0], [1.60506096E12, 351.0], [1.60506078E12, 303.0], [1.6050609E12, 320.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506102E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 201.5, "minX": 3.0, "maxY": 2931.0, "series": [{"data": [[32.0, 276.0], [33.0, 259.5], [34.0, 251.0], [35.0, 266.0], [37.0, 232.0], [36.0, 205.5], [38.0, 257.0], [40.0, 219.5], [43.0, 201.5], [3.0, 2931.0], [5.0, 2255.5], [6.0, 324.0], [8.0, 497.5], [9.0, 954.0], [10.0, 354.0], [11.0, 549.0], [13.0, 533.0], [14.0, 454.0], [15.0, 331.0], [16.0, 382.0], [17.0, 464.0], [18.0, 367.5], [19.0, 354.5], [20.0, 367.5], [21.0, 419.0], [22.0, 406.0], [23.0, 376.0], [24.0, 378.0], [25.0, 356.5], [26.0, 342.0], [27.0, 337.0], [28.0, 339.5], [29.0, 320.0], [30.0, 290.5], [31.0, 310.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 199.5, "minX": 3.0, "maxY": 2931.0, "series": [{"data": [[32.0, 270.5], [33.0, 257.0], [34.0, 248.5], [35.0, 264.0], [37.0, 228.5], [36.0, 204.5], [38.0, 251.0], [40.0, 219.0], [43.0, 199.5], [3.0, 2931.0], [5.0, 2255.5], [6.0, 323.5], [8.0, 497.0], [9.0, 947.0], [10.0, 346.0], [11.0, 549.0], [13.0, 530.0], [14.0, 452.5], [15.0, 329.0], [16.0, 379.5], [17.0, 461.5], [18.0, 361.0], [19.0, 352.5], [20.0, 358.5], [21.0, 410.0], [22.0, 404.0], [23.0, 373.5], [24.0, 369.0], [25.0, 351.0], [26.0, 336.5], [27.0, 332.0], [28.0, 334.0], [29.0, 312.0], [30.0, 284.5], [31.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.2, "minX": 1.60506078E12, "maxY": 25.566666666666666, "series": [{"data": [[1.60506102E12, 4.2], [1.60506084E12, 21.566666666666666], [1.60506096E12, 24.383333333333333], [1.60506078E12, 10.783333333333333], [1.6050609E12, 25.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506102E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60506078E12, "maxY": 25.566666666666666, "series": [{"data": [[1.60506102E12, 4.366666666666666], [1.60506084E12, 21.566666666666666], [1.60506096E12, 24.383333333333333], [1.60506078E12, 10.616666666666667], [1.6050609E12, 25.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506102E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60506078E12, "maxY": 25.566666666666666, "series": [{"data": [[1.60506102E12, 4.366666666666666], [1.60506084E12, 21.566666666666666], [1.60506096E12, 24.383333333333333], [1.60506078E12, 10.616666666666667], [1.6050609E12, 25.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506102E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.366666666666666, "minX": 1.60506078E12, "maxY": 25.566666666666666, "series": [{"data": [[1.60506102E12, 4.366666666666666], [1.60506084E12, 21.566666666666666], [1.60506096E12, 24.383333333333333], [1.60506078E12, 10.616666666666667], [1.6050609E12, 25.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506102E12, "title": "Total Transactions Per Second"}},
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

