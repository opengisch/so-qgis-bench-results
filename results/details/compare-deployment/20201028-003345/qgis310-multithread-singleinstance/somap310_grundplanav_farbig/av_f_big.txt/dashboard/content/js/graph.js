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
        data: {"result": {"minY": 2316.0, "minX": 0.0, "maxY": 8539.0, "series": [{"data": [[0.0, 2316.0], [0.1, 2316.0], [0.2, 2540.0], [0.3, 2568.0], [0.4, 2568.0], [0.5, 2776.0], [0.6, 2902.0], [0.7, 2908.0], [0.8, 2908.0], [0.9, 2933.0], [1.0, 2971.0], [1.1, 2978.0], [1.2, 2978.0], [1.3, 3020.0], [1.4, 3024.0], [1.5, 3050.0], [1.6, 3050.0], [1.7, 3068.0], [1.8, 3078.0], [1.9, 3078.0], [2.0, 3078.0], [2.1, 3088.0], [2.2, 3103.0], [2.3, 3103.0], [2.4, 3117.0], [2.5, 3132.0], [2.6, 3148.0], [2.7, 3148.0], [2.8, 3149.0], [2.9, 3150.0], [3.0, 3150.0], [3.1, 3150.0], [3.2, 3150.0], [3.3, 3155.0], [3.4, 3155.0], [3.5, 3157.0], [3.6, 3170.0], [3.7, 3172.0], [3.8, 3172.0], [3.9, 3178.0], [4.0, 3180.0], [4.1, 3191.0], [4.2, 3191.0], [4.3, 3197.0], [4.4, 3212.0], [4.5, 3214.0], [4.6, 3214.0], [4.7, 3221.0], [4.8, 3225.0], [4.9, 3229.0], [5.0, 3229.0], [5.1, 3241.0], [5.2, 3253.0], [5.3, 3253.0], [5.4, 3255.0], [5.5, 3261.0], [5.6, 3264.0], [5.7, 3264.0], [5.8, 3287.0], [5.9, 3304.0], [6.0, 3323.0], [6.1, 3323.0], [6.2, 3327.0], [6.3, 3330.0], [6.4, 3333.0], [6.5, 3333.0], [6.6, 3351.0], [6.7, 3353.0], [6.8, 3353.0], [6.9, 3357.0], [7.0, 3378.0], [7.1, 3388.0], [7.2, 3388.0], [7.3, 3391.0], [7.4, 3398.0], [7.5, 3422.0], [7.6, 3422.0], [7.7, 3426.0], [7.8, 3432.0], [7.9, 3440.0], [8.0, 3440.0], [8.1, 3444.0], [8.2, 3445.0], [8.3, 3448.0], [8.4, 3448.0], [8.5, 3453.0], [8.6, 3457.0], [8.7, 3457.0], [8.8, 3459.0], [8.9, 3461.0], [9.0, 3463.0], [9.1, 3463.0], [9.2, 3463.0], [9.3, 3466.0], [9.4, 3469.0], [9.5, 3469.0], [9.6, 3471.0], [9.7, 3473.0], [9.8, 3479.0], [9.9, 3479.0], [10.0, 3480.0], [10.1, 3483.0], [10.2, 3483.0], [10.3, 3485.0], [10.4, 3492.0], [10.5, 3495.0], [10.6, 3495.0], [10.7, 3497.0], [10.8, 3506.0], [10.9, 3509.0], [11.0, 3509.0], [11.1, 3511.0], [11.2, 3512.0], [11.3, 3512.0], [11.4, 3512.0], [11.5, 3541.0], [11.6, 3543.0], [11.7, 3543.0], [11.8, 3545.0], [11.9, 3546.0], [12.0, 3547.0], [12.1, 3547.0], [12.2, 3551.0], [12.3, 3569.0], [12.4, 3569.0], [12.5, 3569.0], [12.6, 3577.0], [12.7, 3598.0], [12.8, 3603.0], [12.9, 3603.0], [13.0, 3604.0], [13.1, 3609.0], [13.2, 3619.0], [13.3, 3619.0], [13.4, 3622.0], [13.5, 3625.0], [13.6, 3625.0], [13.7, 3642.0], [13.8, 3653.0], [13.9, 3655.0], [14.0, 3655.0], [14.1, 3661.0], [14.2, 3668.0], [14.3, 3675.0], [14.4, 3675.0], [14.5, 3694.0], [14.6, 3710.0], [14.7, 3733.0], [14.8, 3733.0], [14.9, 3739.0], [15.0, 3752.0], [15.1, 3752.0], [15.2, 3753.0], [15.3, 3758.0], [15.4, 3779.0], [15.5, 3779.0], [15.6, 3781.0], [15.7, 3782.0], [15.8, 3796.0], [15.9, 3796.0], [16.0, 3799.0], [16.1, 3810.0], [16.2, 3812.0], [16.3, 3812.0], [16.4, 3817.0], [16.5, 3831.0], [16.6, 3841.0], [16.7, 3841.0], [16.8, 3851.0], [16.9, 3853.0], [17.0, 3853.0], [17.1, 3855.0], [17.2, 3868.0], [17.3, 3871.0], [17.4, 3871.0], [17.5, 3892.0], [17.6, 3933.0], [17.7, 3948.0], [17.8, 3948.0], [17.9, 3949.0], [18.0, 3960.0], [18.1, 3961.0], [18.2, 3961.0], [18.3, 3962.0], [18.4, 3972.0], [18.5, 3972.0], [18.6, 3975.0], [18.7, 3985.0], [18.8, 3987.0], [18.9, 3987.0], [19.0, 3993.0], [19.1, 3995.0], [19.2, 3997.0], [19.3, 3997.0], [19.4, 4002.0], [19.5, 4012.0], [19.6, 4021.0], [19.7, 4021.0], [19.8, 4028.0], [19.9, 4038.0], [20.0, 4044.0], [20.1, 4044.0], [20.2, 4049.0], [20.3, 4054.0], [20.4, 4054.0], [20.5, 4062.0], [20.6, 4066.0], [20.7, 4067.0], [20.8, 4067.0], [20.9, 4069.0], [21.0, 4073.0], [21.1, 4074.0], [21.2, 4074.0], [21.3, 4079.0], [21.4, 4080.0], [21.5, 4082.0], [21.6, 4082.0], [21.7, 4084.0], [21.8, 4086.0], [21.9, 4086.0], [22.0, 4086.0], [22.1, 4094.0], [22.2, 4097.0], [22.3, 4097.0], [22.4, 4114.0], [22.5, 4114.0], [22.6, 4135.0], [22.7, 4135.0], [22.8, 4141.0], [22.9, 4159.0], [23.0, 4172.0], [23.1, 4172.0], [23.2, 4177.0], [23.3, 4177.0], [23.4, 4177.0], [23.5, 4186.0], [23.6, 4187.0], [23.7, 4188.0], [23.8, 4188.0], [23.9, 4188.0], [24.0, 4195.0], [24.1, 4206.0], [24.2, 4206.0], [24.3, 4210.0], [24.4, 4220.0], [24.5, 4236.0], [24.6, 4236.0], [24.7, 4237.0], [24.8, 4242.0], [24.9, 4245.0], [25.0, 4245.0], [25.1, 4252.0], [25.2, 4267.0], [25.3, 4267.0], [25.4, 4290.0], [25.5, 4309.0], [25.6, 4313.0], [25.7, 4313.0], [25.8, 4315.0], [25.9, 4318.0], [26.0, 4320.0], [26.1, 4320.0], [26.2, 4337.0], [26.3, 4337.0], [26.4, 4339.0], [26.5, 4339.0], [26.6, 4342.0], [26.7, 4348.0], [26.8, 4348.0], [26.9, 4353.0], [27.0, 4363.0], [27.1, 4377.0], [27.2, 4377.0], [27.3, 4391.0], [27.4, 4397.0], [27.5, 4398.0], [27.6, 4398.0], [27.7, 4404.0], [27.8, 4405.0], [27.9, 4407.0], [28.0, 4407.0], [28.1, 4409.0], [28.2, 4410.0], [28.3, 4413.0], [28.4, 4413.0], [28.5, 4414.0], [28.6, 4426.0], [28.7, 4426.0], [28.8, 4432.0], [28.9, 4434.0], [29.0, 4442.0], [29.1, 4442.0], [29.2, 4443.0], [29.3, 4461.0], [29.4, 4464.0], [29.5, 4464.0], [29.6, 4466.0], [29.7, 4471.0], [29.8, 4472.0], [29.9, 4472.0], [30.0, 4473.0], [30.1, 4476.0], [30.2, 4476.0], [30.3, 4477.0], [30.4, 4492.0], [30.5, 4493.0], [30.6, 4493.0], [30.7, 4496.0], [30.8, 4524.0], [30.9, 4539.0], [31.0, 4539.0], [31.1, 4545.0], [31.2, 4565.0], [31.3, 4581.0], [31.4, 4581.0], [31.5, 4597.0], [31.6, 4597.0], [31.7, 4597.0], [31.8, 4598.0], [31.9, 4599.0], [32.0, 4605.0], [32.1, 4605.0], [32.2, 4608.0], [32.3, 4612.0], [32.4, 4613.0], [32.5, 4613.0], [32.6, 4614.0], [32.7, 4615.0], [32.8, 4618.0], [32.9, 4618.0], [33.0, 4627.0], [33.1, 4632.0], [33.2, 4642.0], [33.3, 4642.0], [33.4, 4644.0], [33.5, 4663.0], [33.6, 4663.0], [33.7, 4669.0], [33.8, 4670.0], [33.9, 4678.0], [34.0, 4678.0], [34.1, 4680.0], [34.2, 4694.0], [34.3, 4701.0], [34.4, 4701.0], [34.5, 4713.0], [34.6, 4721.0], [34.7, 4736.0], [34.8, 4736.0], [34.9, 4739.0], [35.0, 4750.0], [35.1, 4750.0], [35.2, 4782.0], [35.3, 4798.0], [35.4, 4814.0], [35.5, 4814.0], [35.6, 4824.0], [35.7, 4826.0], [35.8, 4828.0], [35.9, 4828.0], [36.0, 4832.0], [36.1, 4837.0], [36.2, 4839.0], [36.3, 4839.0], [36.4, 4840.0], [36.5, 4854.0], [36.6, 4886.0], [36.7, 4886.0], [36.8, 4888.0], [36.9, 4897.0], [37.0, 4897.0], [37.1, 4902.0], [37.2, 4903.0], [37.3, 4921.0], [37.4, 4921.0], [37.5, 4935.0], [37.6, 4936.0], [37.7, 4939.0], [37.8, 4939.0], [37.9, 4945.0], [38.0, 4951.0], [38.1, 4953.0], [38.2, 4953.0], [38.3, 4958.0], [38.4, 4960.0], [38.5, 4960.0], [38.6, 4962.0], [38.7, 4964.0], [38.8, 4968.0], [38.9, 4968.0], [39.0, 4971.0], [39.1, 4978.0], [39.2, 4979.0], [39.3, 4979.0], [39.4, 4983.0], [39.5, 4983.0], [39.6, 4986.0], [39.7, 4986.0], [39.8, 4987.0], [39.9, 4990.0], [40.0, 4997.0], [40.1, 4997.0], [40.2, 5001.0], [40.3, 5020.0], [40.4, 5020.0], [40.5, 5046.0], [40.6, 5048.0], [40.7, 5052.0], [40.8, 5052.0], [40.9, 5055.0], [41.0, 5064.0], [41.1, 5066.0], [41.2, 5066.0], [41.3, 5074.0], [41.4, 5080.0], [41.5, 5095.0], [41.6, 5095.0], [41.7, 5097.0], [41.8, 5116.0], [41.9, 5116.0], [42.0, 5121.0], [42.1, 5121.0], [42.2, 5127.0], [42.3, 5127.0], [42.4, 5130.0], [42.5, 5131.0], [42.6, 5137.0], [42.7, 5137.0], [42.8, 5140.0], [42.9, 5141.0], [43.0, 5143.0], [43.1, 5143.0], [43.2, 5145.0], [43.3, 5146.0], [43.4, 5146.0], [43.5, 5154.0], [43.6, 5170.0], [43.7, 5172.0], [43.8, 5172.0], [43.9, 5173.0], [44.0, 5174.0], [44.1, 5176.0], [44.2, 5176.0], [44.3, 5186.0], [44.4, 5187.0], [44.5, 5190.0], [44.6, 5190.0], [44.7, 5191.0], [44.8, 5198.0], [44.9, 5199.0], [45.0, 5199.0], [45.1, 5201.0], [45.2, 5206.0], [45.3, 5206.0], [45.4, 5208.0], [45.5, 5211.0], [45.6, 5213.0], [45.7, 5213.0], [45.8, 5214.0], [45.9, 5214.0], [46.0, 5218.0], [46.1, 5218.0], [46.2, 5219.0], [46.3, 5219.0], [46.4, 5223.0], [46.5, 5223.0], [46.6, 5225.0], [46.7, 5228.0], [46.8, 5228.0], [46.9, 5228.0], [47.0, 5228.0], [47.1, 5230.0], [47.2, 5230.0], [47.3, 5233.0], [47.4, 5233.0], [47.5, 5235.0], [47.6, 5235.0], [47.7, 5244.0], [47.8, 5244.0], [47.9, 5244.0], [48.0, 5244.0], [48.1, 5246.0], [48.2, 5247.0], [48.3, 5248.0], [48.4, 5248.0], [48.5, 5253.0], [48.6, 5264.0], [48.7, 5264.0], [48.8, 5268.0], [48.9, 5274.0], [49.0, 5276.0], [49.1, 5276.0], [49.2, 5289.0], [49.3, 5290.0], [49.4, 5293.0], [49.5, 5293.0], [49.6, 5294.0], [49.7, 5296.0], [49.8, 5297.0], [49.9, 5297.0], [50.0, 5298.0], [50.1, 5300.0], [50.2, 5300.0], [50.3, 5304.0], [50.4, 5304.0], [50.5, 5313.0], [50.6, 5313.0], [50.7, 5318.0], [50.8, 5319.0], [50.9, 5322.0], [51.0, 5322.0], [51.1, 5325.0], [51.2, 5327.0], [51.3, 5328.0], [51.4, 5328.0], [51.5, 5333.0], [51.6, 5336.0], [51.7, 5336.0], [51.8, 5339.0], [51.9, 5341.0], [52.0, 5342.0], [52.1, 5342.0], [52.2, 5345.0], [52.3, 5346.0], [52.4, 5352.0], [52.5, 5352.0], [52.6, 5354.0], [52.7, 5355.0], [52.8, 5360.0], [52.9, 5360.0], [53.0, 5360.0], [53.1, 5380.0], [53.2, 5382.0], [53.3, 5382.0], [53.4, 5385.0], [53.5, 5385.0], [53.6, 5385.0], [53.7, 5387.0], [53.8, 5389.0], [53.9, 5391.0], [54.0, 5391.0], [54.1, 5396.0], [54.2, 5397.0], [54.3, 5399.0], [54.4, 5399.0], [54.5, 5403.0], [54.6, 5404.0], [54.7, 5407.0], [54.8, 5407.0], [54.9, 5409.0], [55.0, 5409.0], [55.1, 5409.0], [55.2, 5412.0], [55.3, 5414.0], [55.4, 5417.0], [55.5, 5417.0], [55.6, 5424.0], [55.7, 5427.0], [55.8, 5427.0], [55.9, 5427.0], [56.0, 5427.0], [56.1, 5432.0], [56.2, 5435.0], [56.3, 5435.0], [56.4, 5444.0], [56.5, 5447.0], [56.6, 5451.0], [56.7, 5451.0], [56.8, 5453.0], [56.9, 5453.0], [57.0, 5453.0], [57.1, 5454.0], [57.2, 5464.0], [57.3, 5465.0], [57.4, 5465.0], [57.5, 5466.0], [57.6, 5468.0], [57.7, 5469.0], [57.8, 5469.0], [57.9, 5470.0], [58.0, 5471.0], [58.1, 5471.0], [58.2, 5471.0], [58.3, 5472.0], [58.4, 5475.0], [58.5, 5475.0], [58.6, 5477.0], [58.7, 5480.0], [58.8, 5481.0], [58.9, 5481.0], [59.0, 5482.0], [59.1, 5483.0], [59.2, 5484.0], [59.3, 5484.0], [59.4, 5492.0], [59.5, 5494.0], [59.6, 5495.0], [59.7, 5495.0], [59.8, 5498.0], [59.9, 5498.0], [60.0, 5499.0], [60.1, 5499.0], [60.2, 5504.0], [60.3, 5505.0], [60.4, 5505.0], [60.5, 5505.0], [60.6, 5505.0], [60.7, 5508.0], [60.8, 5508.0], [60.9, 5514.0], [61.0, 5515.0], [61.1, 5518.0], [61.2, 5518.0], [61.3, 5519.0], [61.4, 5519.0], [61.5, 5520.0], [61.6, 5520.0], [61.7, 5524.0], [61.8, 5525.0], [61.9, 5525.0], [62.0, 5528.0], [62.1, 5528.0], [62.2, 5531.0], [62.3, 5531.0], [62.4, 5533.0], [62.5, 5541.0], [62.6, 5543.0], [62.7, 5543.0], [62.8, 5546.0], [62.9, 5552.0], [63.0, 5555.0], [63.1, 5555.0], [63.2, 5556.0], [63.3, 5560.0], [63.4, 5560.0], [63.5, 5561.0], [63.6, 5562.0], [63.7, 5569.0], [63.8, 5569.0], [63.9, 5570.0], [64.0, 5571.0], [64.1, 5576.0], [64.2, 5576.0], [64.3, 5579.0], [64.4, 5579.0], [64.5, 5581.0], [64.6, 5581.0], [64.7, 5586.0], [64.8, 5588.0], [64.9, 5588.0], [65.0, 5588.0], [65.1, 5591.0], [65.2, 5594.0], [65.3, 5594.0], [65.4, 5596.0], [65.5, 5596.0], [65.6, 5596.0], [65.7, 5596.0], [65.8, 5601.0], [65.9, 5601.0], [66.0, 5603.0], [66.1, 5603.0], [66.2, 5612.0], [66.3, 5614.0], [66.4, 5614.0], [66.5, 5614.0], [66.6, 5614.0], [66.7, 5624.0], [66.8, 5624.0], [66.9, 5630.0], [67.0, 5634.0], [67.1, 5634.0], [67.2, 5634.0], [67.3, 5639.0], [67.4, 5642.0], [67.5, 5643.0], [67.6, 5643.0], [67.7, 5645.0], [67.8, 5645.0], [67.9, 5646.0], [68.0, 5646.0], [68.1, 5646.0], [68.2, 5651.0], [68.3, 5652.0], [68.4, 5652.0], [68.5, 5653.0], [68.6, 5658.0], [68.7, 5658.0], [68.8, 5658.0], [68.9, 5658.0], [69.0, 5663.0], [69.1, 5663.0], [69.2, 5668.0], [69.3, 5669.0], [69.4, 5670.0], [69.5, 5670.0], [69.6, 5676.0], [69.7, 5679.0], [69.8, 5680.0], [69.9, 5680.0], [70.0, 5682.0], [70.1, 5682.0], [70.2, 5682.0], [70.3, 5688.0], [70.4, 5690.0], [70.5, 5692.0], [70.6, 5692.0], [70.7, 5701.0], [70.8, 5710.0], [70.9, 5710.0], [71.0, 5710.0], [71.1, 5711.0], [71.2, 5711.0], [71.3, 5712.0], [71.4, 5712.0], [71.5, 5714.0], [71.6, 5714.0], [71.7, 5714.0], [71.8, 5716.0], [71.9, 5719.0], [72.0, 5725.0], [72.1, 5725.0], [72.2, 5727.0], [72.3, 5728.0], [72.4, 5738.0], [72.5, 5738.0], [72.6, 5738.0], [72.7, 5744.0], [72.8, 5748.0], [72.9, 5748.0], [73.0, 5749.0], [73.1, 5751.0], [73.2, 5752.0], [73.3, 5752.0], [73.4, 5753.0], [73.5, 5754.0], [73.6, 5754.0], [73.7, 5756.0], [73.8, 5756.0], [73.9, 5762.0], [74.0, 5762.0], [74.1, 5769.0], [74.2, 5772.0], [74.3, 5780.0], [74.4, 5780.0], [74.5, 5781.0], [74.6, 5781.0], [74.7, 5783.0], [74.8, 5783.0], [74.9, 5786.0], [75.0, 5789.0], [75.1, 5789.0], [75.2, 5798.0], [75.3, 5798.0], [75.4, 5798.0], [75.5, 5798.0], [75.6, 5802.0], [75.7, 5803.0], [75.8, 5805.0], [75.9, 5805.0], [76.0, 5810.0], [76.1, 5811.0], [76.2, 5821.0], [76.3, 5821.0], [76.4, 5824.0], [76.5, 5826.0], [76.6, 5827.0], [76.7, 5827.0], [76.8, 5828.0], [76.9, 5831.0], [77.0, 5831.0], [77.1, 5832.0], [77.2, 5840.0], [77.3, 5842.0], [77.4, 5842.0], [77.5, 5847.0], [77.6, 5851.0], [77.7, 5851.0], [77.8, 5851.0], [77.9, 5851.0], [78.0, 5852.0], [78.1, 5859.0], [78.2, 5859.0], [78.3, 5860.0], [78.4, 5866.0], [78.5, 5866.0], [78.6, 5871.0], [78.7, 5873.0], [78.8, 5876.0], [78.9, 5876.0], [79.0, 5877.0], [79.1, 5878.0], [79.2, 5883.0], [79.3, 5883.0], [79.4, 5883.0], [79.5, 5885.0], [79.6, 5888.0], [79.7, 5888.0], [79.8, 5890.0], [79.9, 5892.0], [80.0, 5893.0], [80.1, 5893.0], [80.2, 5894.0], [80.3, 5894.0], [80.4, 5894.0], [80.5, 5897.0], [80.6, 5902.0], [80.7, 5902.0], [80.8, 5902.0], [80.9, 5904.0], [81.0, 5906.0], [81.1, 5908.0], [81.2, 5908.0], [81.3, 5910.0], [81.4, 5910.0], [81.5, 5911.0], [81.6, 5911.0], [81.7, 5913.0], [81.8, 5919.0], [81.9, 5919.0], [82.0, 5920.0], [82.1, 5924.0], [82.2, 5928.0], [82.3, 5928.0], [82.4, 5931.0], [82.5, 5934.0], [82.6, 5940.0], [82.7, 5940.0], [82.8, 5942.0], [82.9, 5944.0], [83.0, 5947.0], [83.1, 5947.0], [83.2, 5948.0], [83.3, 5950.0], [83.4, 5950.0], [83.5, 5952.0], [83.6, 5955.0], [83.7, 5960.0], [83.8, 5960.0], [83.9, 5961.0], [84.0, 5964.0], [84.1, 5967.0], [84.2, 5967.0], [84.3, 5971.0], [84.4, 5978.0], [84.5, 5985.0], [84.6, 5985.0], [84.7, 5986.0], [84.8, 5989.0], [84.9, 5992.0], [85.0, 5992.0], [85.1, 5993.0], [85.2, 6000.0], [85.3, 6000.0], [85.4, 6003.0], [85.5, 6009.0], [85.6, 6019.0], [85.7, 6019.0], [85.8, 6027.0], [85.9, 6027.0], [86.0, 6033.0], [86.1, 6033.0], [86.2, 6039.0], [86.3, 6041.0], [86.4, 6053.0], [86.5, 6053.0], [86.6, 6054.0], [86.7, 6065.0], [86.8, 6065.0], [86.9, 6073.0], [87.0, 6113.0], [87.1, 6140.0], [87.2, 6140.0], [87.3, 6142.0], [87.4, 6161.0], [87.5, 6185.0], [87.6, 6185.0], [87.7, 6256.0], [87.8, 6261.0], [87.9, 6261.0], [88.0, 6261.0], [88.1, 6295.0], [88.2, 6297.0], [88.3, 6300.0], [88.4, 6300.0], [88.5, 6323.0], [88.6, 6340.0], [88.7, 6340.0], [88.8, 6345.0], [88.9, 6370.0], [89.0, 6379.0], [89.1, 6379.0], [89.2, 6408.0], [89.3, 6419.0], [89.4, 6424.0], [89.5, 6424.0], [89.6, 6456.0], [89.7, 6471.0], [89.8, 6488.0], [89.9, 6488.0], [90.0, 6502.0], [90.1, 6513.0], [90.2, 6513.0], [90.3, 6527.0], [90.4, 6554.0], [90.5, 6581.0], [90.6, 6581.0], [90.7, 6585.0], [90.8, 6687.0], [90.9, 6760.0], [91.0, 6760.0], [91.1, 6763.0], [91.2, 6764.0], [91.3, 6801.0], [91.4, 6801.0], [91.5, 6807.0], [91.6, 6814.0], [91.7, 6814.0], [91.8, 6855.0], [91.9, 6889.0], [92.0, 6988.0], [92.1, 6988.0], [92.2, 7054.0], [92.3, 7060.0], [92.4, 7089.0], [92.5, 7089.0], [92.6, 7157.0], [92.7, 7188.0], [92.8, 7204.0], [92.9, 7204.0], [93.0, 7223.0], [93.1, 7226.0], [93.2, 7234.0], [93.3, 7234.0], [93.4, 7248.0], [93.5, 7255.0], [93.6, 7255.0], [93.7, 7283.0], [93.8, 7344.0], [93.9, 7355.0], [94.0, 7355.0], [94.1, 7374.0], [94.2, 7406.0], [94.3, 7428.0], [94.4, 7428.0], [94.5, 7430.0], [94.6, 7445.0], [94.7, 7467.0], [94.8, 7467.0], [94.9, 7477.0], [95.0, 7481.0], [95.1, 7481.0], [95.2, 7481.0], [95.3, 7494.0], [95.4, 7505.0], [95.5, 7505.0], [95.6, 7506.0], [95.7, 7512.0], [95.8, 7519.0], [95.9, 7519.0], [96.0, 7531.0], [96.1, 7538.0], [96.2, 7573.0], [96.3, 7573.0], [96.4, 7596.0], [96.5, 7602.0], [96.6, 7604.0], [96.7, 7604.0], [96.8, 7609.0], [96.9, 7623.0], [97.0, 7623.0], [97.1, 7687.0], [97.2, 7709.0], [97.3, 7729.0], [97.4, 7729.0], [97.5, 7731.0], [97.6, 7754.0], [97.7, 7772.0], [97.8, 7772.0], [97.9, 7792.0], [98.0, 7797.0], [98.1, 7848.0], [98.2, 7848.0], [98.3, 7856.0], [98.4, 7872.0], [98.5, 7872.0], [98.6, 7892.0], [98.7, 7910.0], [98.8, 7931.0], [98.9, 7931.0], [99.0, 7975.0], [99.1, 8045.0], [99.2, 8086.0], [99.3, 8086.0], [99.4, 8135.0], [99.5, 8172.0], [99.6, 8265.0], [99.7, 8265.0], [99.8, 8512.0], [99.9, 8539.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 42.0, "series": [{"data": [[2300.0, 1.0], [2500.0, 2.0], [2700.0, 1.0], [2900.0, 5.0], [3000.0, 7.0], [3100.0, 16.0], [3300.0, 12.0], [3200.0, 11.0], [3400.0, 24.0], [3500.0, 15.0], [3700.0, 11.0], [3600.0, 13.0], [3800.0, 11.0], [3900.0, 13.0], [4000.0, 22.0], [4100.0, 13.0], [4300.0, 16.0], [4200.0, 10.0], [4400.0, 23.0], [4600.0, 17.0], [4500.0, 9.0], [4700.0, 8.0], [4800.0, 12.0], [5100.0, 24.0], [5000.0, 12.0], [4900.0, 23.0], [5200.0, 37.0], [5300.0, 32.0], [5400.0, 42.0], [5500.0, 41.0], [5600.0, 36.0], [5800.0, 37.0], [5700.0, 36.0], [6000.0, 13.0], [5900.0, 34.0], [6100.0, 5.0], [6300.0, 6.0], [6200.0, 5.0], [6400.0, 6.0], [6600.0, 1.0], [6500.0, 6.0], [6700.0, 3.0], [6800.0, 5.0], [6900.0, 1.0], [7100.0, 2.0], [7000.0, 3.0], [7200.0, 7.0], [7400.0, 9.0], [7300.0, 3.0], [7500.0, 8.0], [7600.0, 5.0], [7700.0, 7.0], [7900.0, 3.0], [7800.0, 4.0], [8100.0, 2.0], [8000.0, 2.0], [8500.0, 2.0], [8200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.360000000000001, "minX": 1.60384698E12, "maxY": 12.0, "series": [{"data": [[1.60384716E12, 12.0], [1.60384728E12, 12.0], [1.60384734E12, 9.360000000000001], [1.60384698E12, 12.0], [1.6038471E12, 12.0], [1.60384704E12, 12.0], [1.60384722E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384734E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3149.0, "minX": 1.0, "maxY": 5167.8024861878375, "series": [{"data": [[8.0, 3546.0], [4.0, 3642.0], [2.0, 3653.0], [1.0, 4044.0], [9.0, 3541.0], [10.0, 3149.0], [5.0, 3622.0], [11.0, 3150.0], [12.0, 5167.8024861878375], [6.0, 3543.0], [3.0, 3661.0], [7.0, 3545.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5143.653061224482]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.60384698E12, "maxY": 420224.93333333335, "series": [{"data": [[1.60384716E12, 389271.51666666666], [1.60384728E12, 326902.9166666667], [1.60384734E12, 34745.78333333333], [1.60384698E12, 61193.333333333336], [1.6038471E12, 294904.3], [1.60384704E12, 420224.93333333335], [1.60384722E12, 308568.7833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384716E12, 1119.35], [1.60384728E12, 1101.9], [1.60384734E12, 175.33333333333334], [1.60384698E12, 105.93333333333334], [1.6038471E12, 1089.4], [1.60384704E12, 976.8666666666667], [1.60384722E12, 954.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384734E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4317.759999999999, "minX": 1.60384698E12, "maxY": 5764.1984126984125, "series": [{"data": [[1.60384716E12, 4645.344370860928], [1.60384728E12, 4924.4589041095915], [1.60384734E12, 4317.759999999999], [1.60384698E12, 4465.785714285714], [1.6038471E12, 5111.3263888888905], [1.60384704E12, 5638.62015503876], [1.60384722E12, 5764.1984126984125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384734E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4317.08, "minX": 1.60384698E12, "maxY": 5762.928571428572, "series": [{"data": [[1.60384716E12, 4644.12582781457], [1.60384728E12, 4923.410958904109], [1.60384734E12, 4317.08], [1.60384698E12, 4463.785714285715], [1.6038471E12, 5110.243055555557], [1.60384704E12, 5637.302325581391], [1.60384722E12, 5762.928571428572]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384734E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03973509933774837, "minX": 1.60384698E12, "maxY": 8.285714285714286, "series": [{"data": [[1.60384716E12, 0.03973509933774837], [1.60384728E12, 0.09589041095890412], [1.60384734E12, 0.24000000000000002], [1.60384698E12, 8.285714285714286], [1.6038471E12, 0.09722222222222225], [1.60384704E12, 0.06201550387596899], [1.60384722E12, 0.11904761904761911]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384734E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2316.0, "minX": 1.60384698E12, "maxY": 8539.0, "series": [{"data": [[1.60384716E12, 7609.0], [1.60384728E12, 7188.0], [1.60384734E12, 6419.0], [1.60384698E12, 6000.0], [1.6038471E12, 6053.0], [1.60384704E12, 8539.0], [1.60384722E12, 7931.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384716E12, 2550.3039989852905], [1.60384728E12, 3148.645999929905], [1.60384734E12, 3149.0], [1.60384698E12, 2316.0], [1.6038471E12, 3256.829999792576], [1.60384704E12, 3126.349998295307], [1.60384722E12, 4172.714999848604]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384716E12, 2554.1344004058838], [1.60384728E12, 3148.910600028038], [1.60384734E12, 3149.0], [1.60384698E12, 2316.0], [1.6038471E12, 3257.61300008297], [1.60384704E12, 3132.785000681877], [1.60384722E12, 4173.286500060558]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384716E12, 2552.4319994926454], [1.60384728E12, 3148.7929999649523], [1.60384734E12, 3149.0], [1.60384698E12, 2316.0], [1.6038471E12, 3257.264999896288], [1.60384704E12, 3129.9249991476536], [1.60384722E12, 4173.032499924302]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384716E12, 2540.0], [1.60384728E12, 3148.0], [1.60384734E12, 3149.0], [1.60384698E12, 2316.0], [1.6038471E12, 3255.0], [1.60384704E12, 3117.0], [1.60384722E12, 4172.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384716E12, 4461.0], [1.60384728E12, 5194.5], [1.60384734E12, 3962.0], [1.60384698E12, 4540.0], [1.6038471E12, 5406.5], [1.60384704E12, 5579.0], [1.60384722E12, 5685.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3994.0, "minX": 1.0, "maxY": 5626.5, "series": [{"data": [[1.0, 5626.5], [2.0, 5494.5], [4.0, 3994.0], [5.0, 4372.0], [3.0, 5325.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3993.0, "minX": 1.0, "maxY": 5623.5, "series": [{"data": [[1.0, 5623.5], [2.0, 5493.0], [4.0, 3993.0], [5.0, 4372.0], [3.0, 5324.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.60384698E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60384716E12, 2.5166666666666666], [1.60384728E12, 2.433333333333333], [1.60384734E12, 0.21666666666666667], [1.60384698E12, 0.43333333333333335], [1.6038471E12, 2.4], [1.60384704E12, 2.15], [1.60384722E12, 2.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384734E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60384698E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60384716E12, 2.5166666666666666], [1.60384728E12, 2.433333333333333], [1.60384734E12, 0.4166666666666667], [1.60384698E12, 0.23333333333333334], [1.6038471E12, 2.4], [1.60384704E12, 2.15], [1.60384722E12, 2.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384734E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60384698E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60384716E12, 2.5166666666666666], [1.60384728E12, 2.433333333333333], [1.60384734E12, 0.4166666666666667], [1.60384698E12, 0.23333333333333334], [1.6038471E12, 2.4], [1.60384704E12, 2.15], [1.60384722E12, 2.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384734E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60384698E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60384716E12, 2.5166666666666666], [1.60384728E12, 2.433333333333333], [1.60384734E12, 0.4166666666666667], [1.60384698E12, 0.23333333333333334], [1.6038471E12, 2.4], [1.60384704E12, 2.15], [1.60384722E12, 2.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384734E12, "title": "Total Transactions Per Second"}},
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

