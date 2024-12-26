const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

const payloads = [
    { topic: 'test-topic', messages: 'Hello Kafka' },
    { topic: 'test-topic', messages: 'Kafka is fun' },
];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        if (err) {
            console.error('Error sending message:', err);
        } else {
            console.log('Message sent:', data);
        }
        process.exit();
    });
});

producer.on('error', function (err) {
    console.error('Error with producer:', err);
});
