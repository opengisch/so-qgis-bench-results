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
        data: {"result": {"minY": 2441.0, "minX": 0.0, "maxY": 8717.0, "series": [{"data": [[0.0, 2441.0], [0.1, 2441.0], [0.2, 2469.0], [0.3, 2815.0], [0.4, 2815.0], [0.5, 2851.0], [0.6, 2903.0], [0.7, 2904.0], [0.8, 2904.0], [0.9, 2944.0], [1.0, 2979.0], [1.1, 2986.0], [1.2, 2986.0], [1.3, 3023.0], [1.4, 3059.0], [1.5, 3066.0], [1.6, 3066.0], [1.7, 3103.0], [1.8, 3143.0], [1.9, 3143.0], [2.0, 3152.0], [2.1, 3155.0], [2.2, 3175.0], [2.3, 3175.0], [2.4, 3180.0], [2.5, 3187.0], [2.6, 3197.0], [2.7, 3197.0], [2.8, 3203.0], [2.9, 3208.0], [3.0, 3213.0], [3.1, 3213.0], [3.2, 3219.0], [3.3, 3222.0], [3.4, 3222.0], [3.5, 3224.0], [3.6, 3240.0], [3.7, 3250.0], [3.8, 3250.0], [3.9, 3277.0], [4.0, 3301.0], [4.1, 3306.0], [4.2, 3306.0], [4.3, 3316.0], [4.4, 3322.0], [4.5, 3324.0], [4.6, 3324.0], [4.7, 3331.0], [4.8, 3334.0], [4.9, 3339.0], [5.0, 3339.0], [5.1, 3341.0], [5.2, 3342.0], [5.3, 3342.0], [5.4, 3350.0], [5.5, 3371.0], [5.6, 3393.0], [5.7, 3393.0], [5.8, 3424.0], [5.9, 3429.0], [6.0, 3435.0], [6.1, 3435.0], [6.2, 3459.0], [6.3, 3480.0], [6.4, 3520.0], [6.5, 3520.0], [6.6, 3527.0], [6.7, 3540.0], [6.8, 3540.0], [6.9, 3542.0], [7.0, 3563.0], [7.1, 3600.0], [7.2, 3600.0], [7.3, 3606.0], [7.4, 3606.0], [7.5, 3615.0], [7.6, 3615.0], [7.7, 3620.0], [7.8, 3642.0], [7.9, 3644.0], [8.0, 3644.0], [8.1, 3644.0], [8.2, 3650.0], [8.3, 3652.0], [8.4, 3652.0], [8.5, 3655.0], [8.6, 3655.0], [8.7, 3655.0], [8.8, 3655.0], [8.9, 3657.0], [9.0, 3660.0], [9.1, 3660.0], [9.2, 3664.0], [9.3, 3664.0], [9.4, 3665.0], [9.5, 3665.0], [9.6, 3670.0], [9.7, 3672.0], [9.8, 3672.0], [9.9, 3672.0], [10.0, 3678.0], [10.1, 3679.0], [10.2, 3679.0], [10.3, 3680.0], [10.4, 3682.0], [10.5, 3694.0], [10.6, 3694.0], [10.7, 3697.0], [10.8, 3703.0], [10.9, 3707.0], [11.0, 3707.0], [11.1, 3714.0], [11.2, 3722.0], [11.3, 3723.0], [11.4, 3723.0], [11.5, 3728.0], [11.6, 3732.0], [11.7, 3732.0], [11.8, 3748.0], [11.9, 3748.0], [12.0, 3750.0], [12.1, 3750.0], [12.2, 3753.0], [12.3, 3762.0], [12.4, 3764.0], [12.5, 3764.0], [12.6, 3765.0], [12.7, 3766.0], [12.8, 3767.0], [12.9, 3767.0], [13.0, 3773.0], [13.1, 3781.0], [13.2, 3781.0], [13.3, 3781.0], [13.4, 3789.0], [13.5, 3794.0], [13.6, 3794.0], [13.7, 3808.0], [13.8, 3813.0], [13.9, 3817.0], [14.0, 3817.0], [14.1, 3823.0], [14.2, 3825.0], [14.3, 3829.0], [14.4, 3829.0], [14.5, 3832.0], [14.6, 3833.0], [14.7, 3834.0], [14.8, 3834.0], [14.9, 3842.0], [15.0, 3851.0], [15.1, 3851.0], [15.2, 3891.0], [15.3, 3924.0], [15.4, 3928.0], [15.5, 3928.0], [15.6, 3928.0], [15.7, 3929.0], [15.8, 3936.0], [15.9, 3936.0], [16.0, 3936.0], [16.1, 3936.0], [16.2, 3941.0], [16.3, 3941.0], [16.4, 3949.0], [16.5, 3959.0], [16.6, 3960.0], [16.7, 3960.0], [16.8, 3969.0], [16.9, 3983.0], [17.0, 3983.0], [17.1, 4015.0], [17.2, 4023.0], [17.3, 4040.0], [17.4, 4040.0], [17.5, 4045.0], [17.6, 4048.0], [17.7, 4054.0], [17.8, 4054.0], [17.9, 4056.0], [18.0, 4068.0], [18.1, 4080.0], [18.2, 4080.0], [18.3, 4081.0], [18.4, 4103.0], [18.5, 4103.0], [18.6, 4104.0], [18.7, 4118.0], [18.8, 4125.0], [18.9, 4125.0], [19.0, 4132.0], [19.1, 4135.0], [19.2, 4141.0], [19.3, 4141.0], [19.4, 4141.0], [19.5, 4148.0], [19.6, 4150.0], [19.7, 4150.0], [19.8, 4151.0], [19.9, 4153.0], [20.0, 4159.0], [20.1, 4159.0], [20.2, 4172.0], [20.3, 4174.0], [20.4, 4174.0], [20.5, 4177.0], [20.6, 4177.0], [20.7, 4178.0], [20.8, 4178.0], [20.9, 4181.0], [21.0, 4197.0], [21.1, 4199.0], [21.2, 4199.0], [21.3, 4213.0], [21.4, 4215.0], [21.5, 4219.0], [21.6, 4219.0], [21.7, 4220.0], [21.8, 4220.0], [21.9, 4220.0], [22.0, 4221.0], [22.1, 4224.0], [22.2, 4230.0], [22.3, 4230.0], [22.4, 4257.0], [22.5, 4277.0], [22.6, 4278.0], [22.7, 4278.0], [22.8, 4282.0], [22.9, 4290.0], [23.0, 4291.0], [23.1, 4291.0], [23.2, 4292.0], [23.3, 4303.0], [23.4, 4303.0], [23.5, 4313.0], [23.6, 4331.0], [23.7, 4344.0], [23.8, 4344.0], [23.9, 4352.0], [24.0, 4371.0], [24.1, 4377.0], [24.2, 4377.0], [24.3, 4386.0], [24.4, 4393.0], [24.5, 4394.0], [24.6, 4394.0], [24.7, 4399.0], [24.8, 4401.0], [24.9, 4403.0], [25.0, 4403.0], [25.1, 4415.0], [25.2, 4430.0], [25.3, 4430.0], [25.4, 4430.0], [25.5, 4445.0], [25.6, 4465.0], [25.7, 4465.0], [25.8, 4468.0], [25.9, 4468.0], [26.0, 4469.0], [26.1, 4469.0], [26.2, 4472.0], [26.3, 4476.0], [26.4, 4479.0], [26.5, 4479.0], [26.6, 4488.0], [26.7, 4507.0], [26.8, 4507.0], [26.9, 4508.0], [27.0, 4512.0], [27.1, 4524.0], [27.2, 4524.0], [27.3, 4534.0], [27.4, 4536.0], [27.5, 4537.0], [27.6, 4537.0], [27.7, 4543.0], [27.8, 4544.0], [27.9, 4548.0], [28.0, 4548.0], [28.1, 4555.0], [28.2, 4557.0], [28.3, 4558.0], [28.4, 4558.0], [28.5, 4568.0], [28.6, 4574.0], [28.7, 4574.0], [28.8, 4579.0], [28.9, 4588.0], [29.0, 4592.0], [29.1, 4592.0], [29.2, 4593.0], [29.3, 4606.0], [29.4, 4610.0], [29.5, 4610.0], [29.6, 4614.0], [29.7, 4618.0], [29.8, 4630.0], [29.9, 4630.0], [30.0, 4643.0], [30.1, 4644.0], [30.2, 4644.0], [30.3, 4656.0], [30.4, 4657.0], [30.5, 4668.0], [30.6, 4668.0], [30.7, 4668.0], [30.8, 4672.0], [30.9, 4676.0], [31.0, 4676.0], [31.1, 4681.0], [31.2, 4684.0], [31.3, 4688.0], [31.4, 4688.0], [31.5, 4693.0], [31.6, 4725.0], [31.7, 4725.0], [31.8, 4726.0], [31.9, 4727.0], [32.0, 4731.0], [32.1, 4731.0], [32.2, 4742.0], [32.3, 4746.0], [32.4, 4747.0], [32.5, 4747.0], [32.6, 4753.0], [32.7, 4755.0], [32.8, 4780.0], [32.9, 4780.0], [33.0, 4783.0], [33.1, 4806.0], [33.2, 4829.0], [33.3, 4829.0], [33.4, 4833.0], [33.5, 4836.0], [33.6, 4836.0], [33.7, 4842.0], [33.8, 4857.0], [33.9, 4866.0], [34.0, 4866.0], [34.1, 4868.0], [34.2, 4871.0], [34.3, 4879.0], [34.4, 4879.0], [34.5, 4884.0], [34.6, 4884.0], [34.7, 4924.0], [34.8, 4924.0], [34.9, 4926.0], [35.0, 4938.0], [35.1, 4938.0], [35.2, 4945.0], [35.3, 4956.0], [35.4, 4964.0], [35.5, 4964.0], [35.6, 4974.0], [35.7, 4977.0], [35.8, 4977.0], [35.9, 4977.0], [36.0, 4996.0], [36.1, 5007.0], [36.2, 5009.0], [36.3, 5009.0], [36.4, 5011.0], [36.5, 5012.0], [36.6, 5013.0], [36.7, 5013.0], [36.8, 5013.0], [36.9, 5020.0], [37.0, 5020.0], [37.1, 5023.0], [37.2, 5029.0], [37.3, 5032.0], [37.4, 5032.0], [37.5, 5036.0], [37.6, 5043.0], [37.7, 5044.0], [37.8, 5044.0], [37.9, 5047.0], [38.0, 5051.0], [38.1, 5051.0], [38.2, 5051.0], [38.3, 5059.0], [38.4, 5064.0], [38.5, 5064.0], [38.6, 5064.0], [38.7, 5067.0], [38.8, 5070.0], [38.9, 5070.0], [39.0, 5074.0], [39.1, 5077.0], [39.2, 5080.0], [39.3, 5080.0], [39.4, 5091.0], [39.5, 5093.0], [39.6, 5107.0], [39.7, 5107.0], [39.8, 5119.0], [39.9, 5119.0], [40.0, 5128.0], [40.1, 5128.0], [40.2, 5147.0], [40.3, 5158.0], [40.4, 5158.0], [40.5, 5160.0], [40.6, 5163.0], [40.7, 5170.0], [40.8, 5170.0], [40.9, 5177.0], [41.0, 5180.0], [41.1, 5190.0], [41.2, 5190.0], [41.3, 5191.0], [41.4, 5191.0], [41.5, 5191.0], [41.6, 5191.0], [41.7, 5197.0], [41.8, 5200.0], [41.9, 5200.0], [42.0, 5201.0], [42.1, 5205.0], [42.2, 5222.0], [42.3, 5222.0], [42.4, 5239.0], [42.5, 5242.0], [42.6, 5244.0], [42.7, 5244.0], [42.8, 5256.0], [42.9, 5258.0], [43.0, 5262.0], [43.1, 5262.0], [43.2, 5273.0], [43.3, 5301.0], [43.4, 5301.0], [43.5, 5304.0], [43.6, 5312.0], [43.7, 5324.0], [43.8, 5324.0], [43.9, 5326.0], [44.0, 5329.0], [44.1, 5331.0], [44.2, 5331.0], [44.3, 5332.0], [44.4, 5336.0], [44.5, 5345.0], [44.6, 5345.0], [44.7, 5345.0], [44.8, 5347.0], [44.9, 5350.0], [45.0, 5350.0], [45.1, 5352.0], [45.2, 5361.0], [45.3, 5361.0], [45.4, 5364.0], [45.5, 5365.0], [45.6, 5366.0], [45.7, 5366.0], [45.8, 5370.0], [45.9, 5371.0], [46.0, 5380.0], [46.1, 5380.0], [46.2, 5389.0], [46.3, 5395.0], [46.4, 5396.0], [46.5, 5396.0], [46.6, 5397.0], [46.7, 5403.0], [46.8, 5403.0], [46.9, 5405.0], [47.0, 5408.0], [47.1, 5413.0], [47.2, 5413.0], [47.3, 5413.0], [47.4, 5418.0], [47.5, 5421.0], [47.6, 5421.0], [47.7, 5428.0], [47.8, 5430.0], [47.9, 5432.0], [48.0, 5432.0], [48.1, 5436.0], [48.2, 5442.0], [48.3, 5443.0], [48.4, 5443.0], [48.5, 5452.0], [48.6, 5454.0], [48.7, 5454.0], [48.8, 5455.0], [48.9, 5460.0], [49.0, 5467.0], [49.1, 5467.0], [49.2, 5470.0], [49.3, 5472.0], [49.4, 5474.0], [49.5, 5474.0], [49.6, 5480.0], [49.7, 5481.0], [49.8, 5487.0], [49.9, 5487.0], [50.0, 5488.0], [50.1, 5488.0], [50.2, 5488.0], [50.3, 5488.0], [50.4, 5488.0], [50.5, 5491.0], [50.6, 5491.0], [50.7, 5494.0], [50.8, 5502.0], [50.9, 5503.0], [51.0, 5503.0], [51.1, 5503.0], [51.2, 5506.0], [51.3, 5508.0], [51.4, 5508.0], [51.5, 5512.0], [51.6, 5516.0], [51.7, 5516.0], [51.8, 5517.0], [51.9, 5521.0], [52.0, 5521.0], [52.1, 5521.0], [52.2, 5522.0], [52.3, 5525.0], [52.4, 5525.0], [52.5, 5525.0], [52.6, 5525.0], [52.7, 5528.0], [52.8, 5529.0], [52.9, 5529.0], [53.0, 5532.0], [53.1, 5534.0], [53.2, 5539.0], [53.3, 5539.0], [53.4, 5540.0], [53.5, 5544.0], [53.6, 5544.0], [53.7, 5545.0], [53.8, 5546.0], [53.9, 5547.0], [54.0, 5547.0], [54.1, 5547.0], [54.2, 5550.0], [54.3, 5552.0], [54.4, 5552.0], [54.5, 5554.0], [54.6, 5557.0], [54.7, 5561.0], [54.8, 5561.0], [54.9, 5562.0], [55.0, 5563.0], [55.1, 5563.0], [55.2, 5564.0], [55.3, 5573.0], [55.4, 5574.0], [55.5, 5574.0], [55.6, 5581.0], [55.7, 5585.0], [55.8, 5593.0], [55.9, 5593.0], [56.0, 5597.0], [56.1, 5601.0], [56.2, 5602.0], [56.3, 5602.0], [56.4, 5614.0], [56.5, 5618.0], [56.6, 5619.0], [56.7, 5619.0], [56.8, 5623.0], [56.9, 5634.0], [57.0, 5634.0], [57.1, 5635.0], [57.2, 5637.0], [57.3, 5637.0], [57.4, 5637.0], [57.5, 5638.0], [57.6, 5641.0], [57.7, 5643.0], [57.8, 5643.0], [57.9, 5645.0], [58.0, 5648.0], [58.1, 5648.0], [58.2, 5648.0], [58.3, 5652.0], [58.4, 5654.0], [58.5, 5654.0], [58.6, 5656.0], [58.7, 5657.0], [58.8, 5659.0], [58.9, 5659.0], [59.0, 5659.0], [59.1, 5660.0], [59.2, 5660.0], [59.3, 5660.0], [59.4, 5661.0], [59.5, 5668.0], [59.6, 5669.0], [59.7, 5669.0], [59.8, 5672.0], [59.9, 5672.0], [60.0, 5674.0], [60.1, 5674.0], [60.2, 5677.0], [60.3, 5679.0], [60.4, 5679.0], [60.5, 5685.0], [60.6, 5685.0], [60.7, 5686.0], [60.8, 5686.0], [60.9, 5695.0], [61.0, 5703.0], [61.1, 5708.0], [61.2, 5708.0], [61.3, 5708.0], [61.4, 5710.0], [61.5, 5712.0], [61.6, 5712.0], [61.7, 5713.0], [61.8, 5713.0], [61.9, 5713.0], [62.0, 5714.0], [62.1, 5714.0], [62.2, 5717.0], [62.3, 5717.0], [62.4, 5723.0], [62.5, 5723.0], [62.6, 5727.0], [62.7, 5727.0], [62.8, 5727.0], [62.9, 5727.0], [63.0, 5729.0], [63.1, 5729.0], [63.2, 5731.0], [63.3, 5735.0], [63.4, 5735.0], [63.5, 5736.0], [63.6, 5740.0], [63.7, 5743.0], [63.8, 5743.0], [63.9, 5743.0], [64.0, 5745.0], [64.1, 5745.0], [64.2, 5745.0], [64.3, 5746.0], [64.4, 5758.0], [64.5, 5758.0], [64.6, 5758.0], [64.7, 5758.0], [64.8, 5759.0], [64.9, 5761.0], [65.0, 5761.0], [65.1, 5774.0], [65.2, 5776.0], [65.3, 5776.0], [65.4, 5779.0], [65.5, 5783.0], [65.6, 5792.0], [65.7, 5792.0], [65.8, 5794.0], [65.9, 5798.0], [66.0, 5799.0], [66.1, 5799.0], [66.2, 5801.0], [66.3, 5806.0], [66.4, 5808.0], [66.5, 5808.0], [66.6, 5813.0], [66.7, 5815.0], [66.8, 5815.0], [66.9, 5821.0], [67.0, 5821.0], [67.1, 5823.0], [67.2, 5823.0], [67.3, 5835.0], [67.4, 5838.0], [67.5, 5843.0], [67.6, 5843.0], [67.7, 5851.0], [67.8, 5853.0], [67.9, 5857.0], [68.0, 5857.0], [68.1, 5857.0], [68.2, 5858.0], [68.3, 5862.0], [68.4, 5862.0], [68.5, 5863.0], [68.6, 5863.0], [68.7, 5863.0], [68.8, 5865.0], [68.9, 5867.0], [69.0, 5870.0], [69.1, 5870.0], [69.2, 5874.0], [69.3, 5877.0], [69.4, 5883.0], [69.5, 5883.0], [69.6, 5883.0], [69.7, 5894.0], [69.8, 5899.0], [69.9, 5899.0], [70.0, 5905.0], [70.1, 5906.0], [70.2, 5906.0], [70.3, 5910.0], [70.4, 5913.0], [70.5, 5913.0], [70.6, 5913.0], [70.7, 5919.0], [70.8, 5925.0], [70.9, 5927.0], [71.0, 5927.0], [71.1, 5928.0], [71.2, 5929.0], [71.3, 5930.0], [71.4, 5930.0], [71.5, 5936.0], [71.6, 5938.0], [71.7, 5938.0], [71.8, 5940.0], [71.9, 5942.0], [72.0, 5942.0], [72.1, 5942.0], [72.2, 5944.0], [72.3, 5951.0], [72.4, 5953.0], [72.5, 5953.0], [72.6, 5959.0], [72.7, 5959.0], [72.8, 5962.0], [72.9, 5962.0], [73.0, 5962.0], [73.1, 5963.0], [73.2, 5963.0], [73.3, 5963.0], [73.4, 5963.0], [73.5, 5963.0], [73.6, 5963.0], [73.7, 5964.0], [73.8, 5965.0], [73.9, 5967.0], [74.0, 5967.0], [74.1, 5968.0], [74.2, 5971.0], [74.3, 5972.0], [74.4, 5972.0], [74.5, 5972.0], [74.6, 5976.0], [74.7, 5977.0], [74.8, 5977.0], [74.9, 5981.0], [75.0, 5989.0], [75.1, 5989.0], [75.2, 5990.0], [75.3, 5990.0], [75.4, 5992.0], [75.5, 5992.0], [75.6, 5993.0], [75.7, 5996.0], [75.8, 6002.0], [75.9, 6002.0], [76.0, 6003.0], [76.1, 6004.0], [76.2, 6004.0], [76.3, 6004.0], [76.4, 6004.0], [76.5, 6006.0], [76.6, 6010.0], [76.7, 6010.0], [76.8, 6011.0], [76.9, 6013.0], [77.0, 6013.0], [77.1, 6019.0], [77.2, 6020.0], [77.3, 6025.0], [77.4, 6025.0], [77.5, 6025.0], [77.6, 6029.0], [77.7, 6035.0], [77.8, 6035.0], [77.9, 6035.0], [78.0, 6046.0], [78.1, 6046.0], [78.2, 6046.0], [78.3, 6051.0], [78.4, 6052.0], [78.5, 6052.0], [78.6, 6053.0], [78.7, 6057.0], [78.8, 6063.0], [78.9, 6063.0], [79.0, 6063.0], [79.1, 6071.0], [79.2, 6071.0], [79.3, 6071.0], [79.4, 6072.0], [79.5, 6076.0], [79.6, 6078.0], [79.7, 6078.0], [79.8, 6083.0], [79.9, 6089.0], [80.0, 6092.0], [80.1, 6092.0], [80.2, 6098.0], [80.3, 6101.0], [80.4, 6101.0], [80.5, 6102.0], [80.6, 6102.0], [80.7, 6103.0], [80.8, 6103.0], [80.9, 6106.0], [81.0, 6107.0], [81.1, 6113.0], [81.2, 6113.0], [81.3, 6115.0], [81.4, 6117.0], [81.5, 6118.0], [81.6, 6118.0], [81.7, 6119.0], [81.8, 6133.0], [81.9, 6133.0], [82.0, 6151.0], [82.1, 6152.0], [82.2, 6156.0], [82.3, 6156.0], [82.4, 6157.0], [82.5, 6161.0], [82.6, 6167.0], [82.7, 6167.0], [82.8, 6168.0], [82.9, 6169.0], [83.0, 6174.0], [83.1, 6174.0], [83.2, 6176.0], [83.3, 6176.0], [83.4, 6176.0], [83.5, 6178.0], [83.6, 6180.0], [83.7, 6190.0], [83.8, 6190.0], [83.9, 6204.0], [84.0, 6217.0], [84.1, 6219.0], [84.2, 6219.0], [84.3, 6220.0], [84.4, 6232.0], [84.5, 6236.0], [84.6, 6236.0], [84.7, 6247.0], [84.8, 6247.0], [84.9, 6247.0], [85.0, 6247.0], [85.1, 6265.0], [85.2, 6268.0], [85.3, 6268.0], [85.4, 6288.0], [85.5, 6292.0], [85.6, 6293.0], [85.7, 6293.0], [85.8, 6297.0], [85.9, 6299.0], [86.0, 6305.0], [86.1, 6305.0], [86.2, 6306.0], [86.3, 6315.0], [86.4, 6324.0], [86.5, 6324.0], [86.6, 6337.0], [86.7, 6340.0], [86.8, 6340.0], [86.9, 6343.0], [87.0, 6347.0], [87.1, 6368.0], [87.2, 6368.0], [87.3, 6373.0], [87.4, 6375.0], [87.5, 6380.0], [87.6, 6380.0], [87.7, 6417.0], [87.8, 6428.0], [87.9, 6446.0], [88.0, 6446.0], [88.1, 6449.0], [88.2, 6456.0], [88.3, 6461.0], [88.4, 6461.0], [88.5, 6465.0], [88.6, 6481.0], [88.7, 6481.0], [88.8, 6482.0], [88.9, 6482.0], [89.0, 6500.0], [89.1, 6500.0], [89.2, 6555.0], [89.3, 6560.0], [89.4, 6563.0], [89.5, 6563.0], [89.6, 6574.0], [89.7, 6576.0], [89.8, 6600.0], [89.9, 6600.0], [90.0, 6623.0], [90.1, 6640.0], [90.2, 6640.0], [90.3, 6664.0], [90.4, 6675.0], [90.5, 6705.0], [90.6, 6705.0], [90.7, 6803.0], [90.8, 6803.0], [90.9, 6807.0], [91.0, 6807.0], [91.1, 6836.0], [91.2, 6872.0], [91.3, 6908.0], [91.4, 6908.0], [91.5, 6912.0], [91.6, 6943.0], [91.7, 6943.0], [91.8, 6988.0], [91.9, 6999.0], [92.0, 7027.0], [92.1, 7027.0], [92.2, 7171.0], [92.3, 7191.0], [92.4, 7273.0], [92.5, 7273.0], [92.6, 7290.0], [92.7, 7323.0], [92.8, 7327.0], [92.9, 7327.0], [93.0, 7340.0], [93.1, 7348.0], [93.2, 7392.0], [93.3, 7392.0], [93.4, 7400.0], [93.5, 7401.0], [93.6, 7401.0], [93.7, 7421.0], [93.8, 7439.0], [93.9, 7471.0], [94.0, 7471.0], [94.1, 7485.0], [94.2, 7518.0], [94.3, 7523.0], [94.4, 7523.0], [94.5, 7532.0], [94.6, 7544.0], [94.7, 7578.0], [94.8, 7578.0], [94.9, 7585.0], [95.0, 7605.0], [95.1, 7605.0], [95.2, 7611.0], [95.3, 7620.0], [95.4, 7637.0], [95.5, 7637.0], [95.6, 7661.0], [95.7, 7691.0], [95.8, 7695.0], [95.9, 7695.0], [96.0, 7732.0], [96.1, 7744.0], [96.2, 7753.0], [96.3, 7753.0], [96.4, 7796.0], [96.5, 7841.0], [96.6, 7850.0], [96.7, 7850.0], [96.8, 7879.0], [96.9, 7889.0], [97.0, 7889.0], [97.1, 7925.0], [97.2, 7949.0], [97.3, 7949.0], [97.4, 7949.0], [97.5, 7961.0], [97.6, 7978.0], [97.7, 7986.0], [97.8, 7986.0], [97.9, 7987.0], [98.0, 8066.0], [98.1, 8080.0], [98.2, 8080.0], [98.3, 8086.0], [98.4, 8090.0], [98.5, 8090.0], [98.6, 8100.0], [98.7, 8110.0], [98.8, 8167.0], [98.9, 8167.0], [99.0, 8168.0], [99.1, 8183.0], [99.2, 8322.0], [99.3, 8322.0], [99.4, 8349.0], [99.5, 8383.0], [99.6, 8478.0], [99.7, 8478.0], [99.8, 8702.0], [99.9, 8717.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2400.0, "maxY": 43.0, "series": [{"data": [[2400.0, 2.0], [2800.0, 2.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 8.0], [3300.0, 13.0], [3200.0, 9.0], [3400.0, 5.0], [3500.0, 5.0], [3700.0, 21.0], [3600.0, 27.0], [3800.0, 12.0], [3900.0, 13.0], [4000.0, 10.0], [4100.0, 21.0], [4300.0, 11.0], [4200.0, 15.0], [4400.0, 14.0], [4600.0, 17.0], [4500.0, 19.0], [4800.0, 12.0], [4700.0, 11.0], [4900.0, 10.0], [5100.0, 16.0], [5000.0, 26.0], [5300.0, 25.0], [5200.0, 11.0], [5500.0, 39.0], [5600.0, 36.0], [5400.0, 30.0], [5800.0, 28.0], [5700.0, 38.0], [5900.0, 43.0], [6000.0, 33.0], [6100.0, 26.0], [6200.0, 16.0], [6300.0, 12.0], [6400.0, 10.0], [6500.0, 6.0], [6600.0, 5.0], [6800.0, 5.0], [6700.0, 1.0], [6900.0, 5.0], [7100.0, 2.0], [7000.0, 1.0], [7200.0, 2.0], [7300.0, 5.0], [7400.0, 6.0], [7600.0, 7.0], [7500.0, 6.0], [7700.0, 4.0], [7900.0, 7.0], [7800.0, 4.0], [8000.0, 4.0], [8100.0, 5.0], [8300.0, 3.0], [8700.0, 2.0], [8400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.531914893617023, "minX": 1.60423176E12, "maxY": 12.0, "series": [{"data": [[1.60423182E12, 12.0], [1.60423176E12, 12.0], [1.60423194E12, 12.0], [1.60423188E12, 12.0], [1.60423206E12, 11.531914893617023], [1.604232E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423206E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3306.0, "minX": 1.0, "maxY": 5332.70303867403, "series": [{"data": [[8.0, 3773.0], [4.0, 3781.0], [2.0, 3766.0], [1.0, 4151.0], [9.0, 3767.0], [10.0, 3324.0], [5.0, 3794.0], [11.0, 3306.0], [12.0, 5332.70303867403], [6.0, 3703.0], [3.0, 3781.0], [7.0, 3723.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5308.49795918367]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 490.8666666666667, "minX": 1.60423176E12, "maxY": 370844.1, "series": [{"data": [[1.60423182E12, 316776.2166666667], [1.60423176E12, 263535.7], [1.60423194E12, 370844.1], [1.60423188E12, 300303.2833333333], [1.60423206E12, 292359.26666666666], [1.604232E12, 291964.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423182E12, 916.8166666666667], [1.60423176E12, 490.8666666666667], [1.60423194E12, 1024.8], [1.60423188E12, 1102.0666666666666], [1.60423206E12, 1050.5666666666666], [1.604232E12, 937.9166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423206E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4794.5602836879425, "minX": 1.60423176E12, "maxY": 6136.842975206612, "series": [{"data": [[1.60423182E12, 6136.842975206612], [1.60423176E12, 5105.707692307691], [1.60423194E12, 5287.226277372264], [1.60423188E12, 4895.61904761905], [1.60423206E12, 4794.5602836879425], [1.604232E12, 5703.854838709676]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423206E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4793.631205673761, "minX": 1.60423176E12, "maxY": 6135.570247933886, "series": [{"data": [[1.60423182E12, 6135.570247933886], [1.60423176E12, 5104.076923076923], [1.60423194E12, 5286.007299270072], [1.60423188E12, 4894.585034013604], [1.60423206E12, 4793.631205673761], [1.604232E12, 5702.677419354839]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423206E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10218978102189782, "minX": 1.60423176E12, "maxY": 2.1076923076923095, "series": [{"data": [[1.60423182E12, 0.14049586776859502], [1.60423176E12, 2.1076923076923095], [1.60423194E12, 0.10218978102189782], [1.60423188E12, 0.12244897959183672], [1.60423206E12, 0.11347517730496458], [1.604232E12, 0.1209677419354839]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423206E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2441.0, "minX": 1.60423176E12, "maxY": 8717.0, "series": [{"data": [[1.60423182E12, 8717.0], [1.60423176E12, 8322.0], [1.60423194E12, 7889.0], [1.60423188E12, 6119.0], [1.60423206E12, 7340.0], [1.604232E12, 6380.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423182E12, 4312.931993193626], [1.60423176E12, 2903.0], [1.60423194E12, 2952.469998848438], [1.60423188E12, 2450.2959990119934], [1.60423206E12, 3160.559999322891], [1.604232E12, 4315.249999463558]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423182E12, 4338.625202722549], [1.60423176E12, 2903.0], [1.60423194E12, 2956.8170004606245], [1.60423188E12, 2454.0256003952027], [1.60423206E12, 3163.1160002708434], [1.604232E12, 4317.275000214577]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423182E12, 4327.205996596813], [1.60423176E12, 2903.0], [1.60423194E12, 2954.884999424219], [1.60423188E12, 2452.3679995059965], [1.60423206E12, 3161.9799996614456], [1.604232E12, 4316.374999731779]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423182E12, 4290.0], [1.60423176E12, 2903.0], [1.60423194E12, 2944.0], [1.60423188E12, 2441.0], [1.60423206E12, 3155.0], [1.604232E12, 4313.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423182E12, 5963.0], [1.60423176E12, 4468.0], [1.60423194E12, 4996.0], [1.60423188E12, 5256.0], [1.60423206E12, 4857.0], [1.604232E12, 5758.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423206E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3983.0, "minX": 1.0, "maxY": 5965.0, "series": [{"data": [[2.0, 5701.5], [1.0, 5965.0], [4.0, 4151.5], [5.0, 3983.0], [3.0, 5170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3982.0, "minX": 1.0, "maxY": 5959.0, "series": [{"data": [[2.0, 5700.0], [1.0, 5959.0], [4.0, 4151.5], [5.0, 3982.0], [3.0, 5170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60423176E12, "maxY": 2.45, "series": [{"data": [[1.60423182E12, 2.0166666666666666], [1.60423176E12, 1.2833333333333334], [1.60423194E12, 2.283333333333333], [1.60423188E12, 2.45], [1.60423206E12, 2.15], [1.604232E12, 2.066666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423206E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60423176E12, "maxY": 2.45, "series": [{"data": [[1.60423182E12, 2.0166666666666666], [1.60423176E12, 1.0833333333333333], [1.60423194E12, 2.283333333333333], [1.60423188E12, 2.45], [1.60423206E12, 2.35], [1.604232E12, 2.066666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423206E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60423176E12, "maxY": 2.45, "series": [{"data": [[1.60423182E12, 2.0166666666666666], [1.60423176E12, 1.0833333333333333], [1.60423194E12, 2.283333333333333], [1.60423188E12, 2.45], [1.60423206E12, 2.35], [1.604232E12, 2.066666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423206E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60423176E12, "maxY": 2.45, "series": [{"data": [[1.60423182E12, 2.0166666666666666], [1.60423176E12, 1.0833333333333333], [1.60423194E12, 2.283333333333333], [1.60423188E12, 2.45], [1.60423206E12, 2.35], [1.604232E12, 2.066666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423206E12, "title": "Total Transactions Per Second"}},
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

