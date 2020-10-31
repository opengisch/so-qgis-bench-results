# QGIS Benchmark summary compare-webserver (20201030-230244)


compare different webservers in front of of 3.10

_run completed in 00h 04m 24s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201030-230244_plot.html)

## Summary
| name           | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-caddy  | Global  |                 39.3 | +0.0%                        |          171.1 | +0.0%                  |          7850.5 | +0.0%                   |         5115 |        11155 |            72 |            0 |     4894.2 |    4367.13 |     4188.5 |      60.5 |   30.9667 |      12.6 |          0 |
| qgis310-nginx  | Global  |                 39.4 | +0.3%                        |          171.9 | +0.5%                  |          7915   | +0.8%                   |         5087 |        12109 |            72 |            0 |     4867.1 |    4331.27 |     4223.6 |      55.6 |   33.4    |      12.9 |          0 |
| qgis310-apache | Global  |                 41.3 | +5.1%                        |          176.7 | +3.2%                  |          8046   | +2.5%                   |         3942 |        12952 |            72 |            0 |     4884.5 |    4357.37 |     4158   |      58.2 |   29.4    |      12.5 |          0 |

## Aggregated
| name                                         | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 15.9 | +0.0%                        |           88.1 | +0.0%                  |          4044   | +0.0%                   |         2668 |         5237 |            22 |            0 |     4894.2 |     4470.4 |     4242.9 |      60.5 |      30.4 |      25.1 |          0 |
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 16.5 | +3.8%                        |           92.4 | +4.8%                  |          4223   | +4.4%                   |         3141 |         5584 |            22 |            0 |     4867.1 |     4392.1 |     4265.4 |      55.6 |      30.9 |      25   |          0 |
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 16.5 | +3.8%                        |           90.3 | +2.4%                  |          4135.5 | +2.3%                   |         2919 |         5362 |            22 |            0 |     4884.5 |     4505.4 |     4224.4 |      45.4 |      30.2 |      24.9 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 15.3 | +0.0%                        |           65.3 | +0.0%                  |          3225.5 | +0.0%                   |         1725 |         5640 |            20 |            0 |     4549.7 |     4378.1 |     4284.6 |      54.3 |      29.6 |      12.9 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 15.4 | +0.7%                        |           65.7 | +0.5%                  |          3301   | +2.3%                   |         1983 |         4998 |            20 |            0 |     4564.1 |     4393.4 |     4308.3 |      56.1 |      29.7 |      12.6 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 16.9 | +10.5%                       |           71   | +8.7%                  |          3397.5 | +5.3%                   |          869 |         6661 |            20 |            0 |     4429   |     4351.6 |     4304.6 |      58.2 |      25.5 |      12.5 |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |                  7.6 | +0.0%                        |           14.2 | +0.0%                  |           466.5 | +0.0%                   |          221 |          885 |            30 |            0 |     4223.6 |     4223.6 |     4223.6 |      39.7 |      39.7 |      39.7 |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |                  7.9 | +3.9%                        |           15.4 | +8.6%                  |           513   | +10.0%                  |          154 |          929 |            30 |            0 |     4248.9 |     4215.1 |     4158   |      37.4 |      32.5 |      26.8 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |                  8   | +5.3%                        |           17.3 | +22.0%                 |           505.5 | +8.4%                   |          464 |          920 |            30 |            0 |     4272.3 |     4237.6 |     4188.5 |      37   |      32.8 |      28.7 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201030-230244/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 15.9 | +0.0%                        |           88.1 | +0.0%                  |          4044   | +0.0%                   |            22 |            0 |          0 |      4006.59  |         2668 |         5237 |        5054   |       5232.95 |          5237 |      2.10667 |                274.676 |           0.897731 |     4894.2 |     4470.4 |     4242.9 |      60.5 |      30.4 |      25.1 |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201030-230244/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 16.5 | +3.8%                        |           92.4 | +4.8%                  |          4223   | +4.4%                   |            22 |            0 |          0 |      4200.23  |         3141 |         5584 |        5370.5 |       5576.5  |          5584 |      2.01373 |                262.575 |           0.858124 |     4867.1 |     4392.1 |     4265.4 |      55.6 |      30.9 |      25   |
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201030-230244/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 16.5 | +3.8%                        |           90.3 | +2.4%                  |          4135.5 | +2.3%                   |            22 |            0 |          0 |      4102.73  |         2919 |         5362 |        5187.4 |       5361.1  |          5362 |      2.04271 |                266.417 |           0.870474 |     4884.5 |     4505.4 |     4224.4 |      45.4 |      30.2 |      24.9 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201030-230244/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 15.3 | +0.0%                        |           65.3 | +0.0%                  |          3225.5 | +0.0%                   |            20 |            0 |          0 |      3266.75  |         1725 |         5640 |        4845.2 |       5600.45 |          5640 |      2.04918 |                637.599 |           0.858094 |     4549.7 |     4378.1 |     4284.6 |      54.3 |      29.6 |      12.9 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201030-230244/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 15.4 | +0.7%                        |           65.7 | +0.5%                  |          3301   | +2.3%                   |            20 |            0 |          0 |      3284.3   |         1983 |         4998 |        4576.7 |       4979.1  |          4998 |      2.03459 |                633.041 |           0.851984 |     4564.1 |     4393.4 |     4308.3 |      56.1 |      29.7 |      12.6 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201030-230244/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 16.9 | +10.5%                       |           71   | +8.7%                  |          3397.5 | +5.3%                   |            20 |            0 |          0 |      3551.1   |          869 |         6661 |        6197.2 |       6642.25 |          6661 |      1.78747 |                556.223 |           0.748503 |     4429   |     4351.6 |     4304.6 |      58.2 |      25.5 |      12.5 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201030-230244/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  7.6 | +0.0%                        |           14.2 | +0.0%                  |           466.5 | +0.0%                   |            30 |            0 |          0 |       472.067 |          221 |          885 |         737.6 |        860.25 |           885 |     15.213   |                412.376 |           6.20602  |     4223.6 |     4223.6 |     4223.6 |      39.7 |      39.7 |      39.7 |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201030-230244/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.9 | +3.9%                        |           15.4 | +8.6%                  |           513   | +10.0%                  |            30 |            0 |          0 |       512.467 |          154 |          929 |         850.9 |        897.1  |           929 |     13.2743  |                360.231 |           5.41517  |     4248.9 |     4215.1 |     4158   |      37.4 |      32.5 |      26.8 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201030-230244/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  8   | +5.3%                        |           17.3 | +22.0%                 |           505.5 | +8.4%                   |            30 |            0 |          0 |       575.9   |          464 |          920 |         878.5 |        900.75 |           920 |     13.0039  |                352.38  |           5.30485  |     4272.3 |     4237.6 |     4188.5 |      37   |      32.8 |      28.7 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different webservers in front of of 3.10'

test-cases:
  qgis310-nginx:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis310-apache:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-apache

  qgis310-caddy:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-caddy

  qgis310-standalone:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different webservers in front of of 3.10
test-cases:
  qgis310-apache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-apache
  qgis310-caddy:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-caddy
  qgis310-nginx:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ''
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```