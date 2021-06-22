const products = [
    {
      name: "TV",
      imageUrl:
        "https://images.samsung.com/is/image/samsung/pk-uhd-tu8500-ua65tu8500uxmm-frontblack-265963996?$684_547_PNG$",
      description:
        "Sony Bravia 43-inch Smart LED TV. The Sony Bravia Smart LED TV features a 43-inch Full HD display with HDR 10",
      price: 40000,
      countInStock: 100,
    },
    {
      name: "Voltas AC",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1463/4916/products/voltas-15-ton-1-star-2018-split-ac-alloy-181-jzj1-white-voltas-2_480x480.jpg?v=1527781994",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 65000,
      countInStock: 100,
    },
    {
      name: "MacBook Air M1",
      imageUrl:
        "https://assets.newatlas.com/dims4/default/27fb203/2147483647/strip/true/crop/4861x3276+0+0/resize/1424x960!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2015-retina-macbook-pro-review-7.jpg",
      description:
        "Apple MacBook Air (M1, 2020) Summary Apple MacBook Air (M1, 2020) is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. it comes with 8GB of RAM. The Apple MacBook Air (M1, 2020) packs 512GB of SSD storage",
      price: 92900,
      countInStock: 100,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBAQEhITFhUSFREVFxUSEBAVFRURFxIWFhYVFRUYHiggGBolHRUXITEiKCkrLy4yFx8zRDMtNyktLi0BCgoKDg0OFRAQGCseGh83LSsrNS43LSs3MC8sKzQ4LSstMjctKzAtNy0rKzItLSstMzctKywtLys3LS0tNCstK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUHBgj/xABBEAABAwIDBAYGBwcEAwAAAAABAAIRITEDQVEEEmFxBQYigZGhEzJCUpKxB0NicsHR8BQzU4LC4fGTorKzVGSj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEEAwL/xAAoEQEAAgIAAgkFAAAAAAAAAAAAARECAwQTEhQhM0FCUYGhJDEyYcH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEWHOABJMAZmy4u3da9jwqOx2uIyw5f3dmQO9B20Xxe0/SJgj1MLEdxcWsH4lczG+kXFPqYOG37znu+UIPR0XlWL192s2dht+7hj+olVX9c9sP15HJmEP6VaHr6xK8axOte1/wAfE7iB8lGes21f+Ri/G8fklJb2qUXix6ybUCQNqxTFAS91RrE0n8Vvh9a9rH1+J3uB+YSi3syLyDD657YPryebMM/0q1hdfdrF3Md97DH4QlK9VRec4H0iYo9fCwzyL2/muns30g4J9fCe37pa75wpQ+zRcXY+tOyYkAYwaTliAs83U812GPBAIIINiDIPeg2REQEREBERAREQEREBERBgmF551q+k3DwnOwdlAxHihxHfuwc90Cr+dBzUv0k9OOBbsmG6JG9ikGKH1cM6A3PdqV5Vt/RZkuZbTMLVhwueermY9v6Z8uIxx2dCexf6R6x4+0GcbFc/gTDRyYKDwVdu1cVxX4T2rAxnBZ6p3u3eOPp+gpMLGbB3muJ4YhEeVVwmbWp27Wg62LitMbrS3XtudPitWuKoN2lTNxQhazvJvqLe4rdpjT4QiW2303lqTIrHwj8FqICFpC5Gv1E8AVGcQKN2OELW8TFBPZaWjTfJ80binVc921gZqF3SDdUV2P2g6q1sHTuLgGcLEczg00PNtj3hfLO6S0WG4znWQunsPV76SGOLcPagGE0GK0diftt9nmKcl6Ax4IBBBBqCMwvzhsexOkF1BpmeS9F+jfrHGP8AsL3S0gnCk+q8SXYYOkV4FpC0ZcLnjq5mXZ/XCOIxy2dDHtemIiLK0CIiAiIgIiICFFFtToY86NcfJB4t0xtRxdoxsU133vMfZ9lvwx+r884ZAoc4g1/uOQnuylE3mDA5zF6d/gbVUoaARQU1GWYFLdryN6g9te3PXN4TTns1YZxWUWpESDvMtf2o76FQu2LCN4B4mPJyvYgJPZpUWJiAc5+0ABGecglsLmyZvaooIrFb2a40j1pkSSdXXpy7zCMvhm6nX4ZTCqegA6x8vyWB1YebFviR81Z9HBiJJtA3ZMmgIAoYMR71IFTjD2zEbG7ivAiZBcRGRrwLTMHOBmPM7eHy8kx7pyuIj7ZxKNvVLaMmTyc381M3qptQ+pf3QfkVcwun8dtfSa0LcJ26ZsTGR7JMmJFyruF1w2gAeobDtYYFamLjIHwExK5Zcrws+o8Yhyh1Z2r+Di/A5ZHV7af4OL/pv/JdxnX3GEdnBPENfbKAHZi3GVK36QcX3MLwxDPLtV4a2XisS93pD509Xdq/g4v+m/8AJaO6tbWfqMX4HL6cfSBjkfusL4cQ5/e7hqaKs/6QMf3MH4X6xTtVrTmlYre70h847qptp+pxO/dHzKhf1O2zNkc3s/Nd7G687Sf4YOgw860Ek8vE2XP2jrbtLjHpAJj2MMVrwzqb2A1XqOV42n1E/aIct3U7H9pzB/MT8gg6qRV2J4N/ElS7R0xjOBnEfr6zxQilBw83RRc7E2kvJJIz0MGS0mbiCXfCLLtGzh8fJM+5y+InzxC8zovZ2e1vR9qfJoUzMVjaMb8m5wamSqGDiA053yuCMtT8GRqp8IXtx7wKzpvSLZnkfXXej3eEY/K9T6X55TKwcRzprAqIbIrS5Nc/7qBu0HAxcPHYBOE5rwNNwz4UhWeFqT35688wd7j2qm1VBJ5VoP1438Muzdnsm85tp16sdcVjFP0dhPDmhws4AjkRIW653Vt+9seyO1wMA+OG1dFcXQREQEREBERAUO2/usT7j/8AiVMo9oEscNWn5IPB8J1BrpbKLqw2SJoIJjKo5CphpplHAKrs5mMyJoImY9mc/wBaKw12hmeMCCZjeytM5AA+yV6RoGiYItWm7IpbIZRui5AFmEo4iQQKmMga3HrVfO7I19HvGhAWWzaLQIggAUy9kRFMhTMrTEzpecqmYrS9Ypmd1tmGAhfMDMZ1NZgEdqriSKG7t1rrFQYjqEmtSbOdezpdcHfyEkOIFAt9OTqkwPVgy7SwkagD1SosZhrA4yRUTM70+q4V+72mi6CF+NEEn3plzZlstMuFJA7JNmy0iqgc8msRpIivGbSRbWHG63xtBYRQdqSLANoIAmG07IJNlA90AxF3V4bokzMkHM3fPBBo7GJMmcq7wFZNSRxudRSiw3aqxJMa7wPiLd3q3zVbaHVg6RUgkOAqItMR3QbqJ1M5pxIidM7yPfQXP2mmcR7Mg30FJp3DtKNu1ecUmsxAjUkGAbETN1TxTe9BnM397OufcjHQ4g/akGch2pAsNRlkgsvxzaKGtJtQU0GU5QdVj9oEf5gmJN7Uy0Ei6r9xHwyTEmoN4jmKXWXGaGkTMyIEgkGlBMTWhpqgnOJewrM3Jms8zec6C63Y6aHgPZOW6K3EQRnYgqphTeSBJyqCZmIuZNRmZIspfSTXKK13hGQIzp4ilygu4L+0CT6s3g99TNvCSLFXMJ8GQZ490Qc8gI1GoBXLw3C8k0pAnQU1pbW2avYY+RzuABMO0gDmADdpQdDekEzS81udSM+0ainxBUsexyP+ZBCndp8qReg8/PQKvtLhFLU4WAtP6vog/QPVmmw7GP8A19n/AOpq6Urn9Bjd2XZm6YOCP/m1XgV5VJKyCo5W0oN0WJRBlERAWrnI5VsZ6DxTaMLdxMTCPsOcziIdGXLyURyiRGnan8/KTGTjHa677J6LaziAHdxu3T36B1cjMO/mXDc8CuREcCINs7E003tAqicY0Z285ExWYEid6M96hICrPfMu1qK8wSTNL5Aw0+8+FuNCIOY7Opm1zPnQUBVUYkGeQFeO8IyBkEjUjes0TRkuMgjWlIMzqRQ8LNrm9VsR14vSoO8J3QIBPIRmaOKmeYg0oL30y0nLMibNrVxnCPaN5JLXGRIcTFJmZjPsihoEWK7KfFxBvFxQVuTnahULnjdit6RAk6VsdMm2zW+JiEjW14bUChA8Y0bM1AVcukG1YgQXdk1tcjQULu5BDim0ERlEgRNIziSYnOcioy71jlWZPjOnEj1TaVNiMMidXZtmYqdCYztEAVULm5coOcgUIHyGcVsgOiJypI0uaDWKbuleCje40PKk890gm9zBPetnClIyubiTfOJzvPBCzUxEipaecxpmM7BBpi04chlInunxMnJZBqTW7c9B2YJqTAMa1N4R4NzGRPAG1crAz/KstGRsDWxng4CtxWLEAINRnSIiho2nIUFQZuJiqkBzIrLqH/daONrXFlGbm88671ag2m9c7xRTAAmjdDl3QfITwablBu1w8Ab8LzXgJ7jkrLMUyPGDe5ytczwMGzlXwjl71OzQ8IOQ+VBmpcJwm4oBQNpFeNP8tOSC8027iQJmpv8AIdw90qvtALhAkk0GpcTA518ZW7sSh0rfy/HnH2l0uqex+l2vCJ9XCIxHUp2TLR3ujzUHumA8Na1nugN8BH4KwHr5/A2lX8HaFFdQFbAqrh4qmDkFhFhEG6IiDRyqY6uuCgxWIPkus3RzcfCLHUN2uza6L8tQvLNtw34Tix8h2ZrBt2hkRQHuXtu2bPK+R6e6EGICCJ01B4FUedsxhAtkDU9wnUAXyDXe8sOeJNSBSQSYMgTPvUEeDbAqbpPorFwZIBcK1Arlcfyiy5np5ubTa9zfU08XcAqi16YRUOHN3C8zfjlQD2lC88SLCKNpBABbrGWQ1IrC3FvB4TJNqCORMDvOqixMWJqKDOtDcRmDHN3KqCQWkCRBsKbpMiDdwJg8TBsosRskzesy40Mw61jqfZyoVn0u8ZmpmpJtnUeZHIZhYLwGxOQyAyigtQWFhmgjI3RYWGRHcWzlIplexWr/AFj/AGsJz0NCczkosTl5kit/lzMaLBpW1zQaTUHKNR6s0lBscMkRpE9oXFu1EAwPCl1hmWcVBkgRYQbjhpMlanMboziwPh+BpneixiPJ0vqZqBcnxk3pOUhl74NAOEdmhn2czFYj7V4Rjge1ydSLZQ/KmfEzWFHnX/cLVmK146jlAWXkTTiZH2sufzvewb7vAA6RxqC2bDNuRjisNN+ecGTnIzNTzuKkKJuJ+FZ10/A8Y5g/9DOdJ8tDIsUFpuJ89Qcj40nmFMw18cgY/M0/4msqm3Frz0A8uEmY5rp7F0fiYhsQMpvE5eXgoGHhueQxokmacZrOgp4QvvOrexjBZAq50FztTkOQXP6I6IDAIHevptk2aFFdHZ3LpYL1RwMJXsHDOiC9gvVxjlTwcI6K5h4JQW5RN1EEqIiAtXBbIgr4mFKo7Rsk5LqwsFiD5Pbeh2uy8l8v0p1Nw3yd0TqKHxFV6e7BCgxNkBQeHbd1FxGz6PEI4OG8NOBsIvquHtHVzbWU3GPHBzmm0WIjzX6ExOjwclVxOiWnJB+dMXZNpbO9s+KOI3HW+6f1wVZ+0uEh2Hii1DhYmU8P1xuv0VidBNPshVX9W2H2R4JY/PLtvaCJkWuHD5qN3SDD7Qvr+v1ov0G/qrhn2B4KJ3VDC9weASx+fj0gyCN4V45Xj9eV1t+2g2ryBXvw6oYXuDwClZ1Uwx7A8Alj8+txXm2HiHlhYh/BT4WwbS71cDEPMNb8yF+gsPq0weyPBWcPoFo9kJY8E2fqvtj7sDRxJJ8AK+K7ew9QsU1eXHgBA/Ne14fRDRkrWH0cBkg8v6N6j7vsgL6PYuqsaL7ZmyAKZuCEHzmzdXgLnyXSwehmBdUNWwCCnh9HsGSsM2doyUqyEGAwLZEQEREBERAREQEREBERBiFjcC2RBocMLHogpEQRehCx6EKZEEHoQnogpisII/RBZ3At0QahqzCyiDCyiICIiAshAFlAREQEREBERAREQEREBERAREQEREBERAREQYhIWUQaotkQYhIWUQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 3500,
      countInStock: 100,
    },
    {
      name: "Blazer",
      imageUrl:
        "https://th.bing.com/th/id/Rbdb69032e0e8a79d2433cb3550cf2455?rik=afS8nudA2qhArA&riu=http%3a%2f%2fwww.dhresource.com%2f0x0s%2ff2-albu-g2-M00-C9-31-rBVaGlZrhc6AKE_HAAZODRO-qLQ587.jpg%2fwoolen-blazer-men-wedding-dress-latest-coat.jpg&ehk=M5gTFNAT%2fE0Ps3Vk4Toi504LWYkk%2bR7SFpURnHW4TN0%3d&risl=&pid=ImgRaw",
      description:
        "A reefer-style, navy blue blazer, dressed with brass buttons. A blazer is a type of jacket resembling a suit jacket, but cut more casually. A blazer is generally distinguished from a sport coat as a more formal garment and tailored from solid colour fabrics.",
      price: 2000,
      countInStock: 100,
    },
  ];
  
  module.exports = products;