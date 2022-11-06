import {Subscriber, Subscription, Subscriptions} from '../src/models';


describe('Subscriptions Class Test Suite:',() => {

	const subscriptions_test_object = new Subscriptions();

	test('Create Subscriptions Object', () => {
		expect(subscriptions_test_object).toBeInstanceOf(Subscriptions); //Create Object type Subscription.
		expect(subscriptions_test_object.allSubscriptions).toStrictEqual({}); //Subscription objects contains empty object.
	});

	test('Add Subscription', () => {
		subscriptions_test_object.addSubscription('test-sub');
		expect(subscriptions_test_object.allSubscriptions).toHaveProperty('test-sub');
	});

	test('Get Subscription', () => {
		expect(subscriptions_test_object.getSubscription('test-sub')).toBeInstanceOf(Subscription);
	});

	test('Remove Subscription', () => {
		expect(subscriptions_test_object.allSubscriptions).toHaveProperty('test-sub');
		subscriptions_test_object.removeSubscription('test-sub');
		expect(subscriptions_test_object.allSubscriptions).toStrictEqual({});
	});
});

describe('Subscription Class Test Suite:', () => {

	const test_sub = new Subscriptions().addSubscription('test-sub');

	test('Initial instance of Subcription', () => {
		expect(test_sub.Subscribers).toHaveLength(0);
		expect(test_sub.tags).toHaveLength(0);
	});

	test('Add Subscribers', () => {
		test_sub.addSubscribers([{address: 'test@dlvlup.com', name: 'dlvlupTest'}]);
		expect(test_sub.Subscribers).toHaveLength(1);
		expect(test_sub.Subscribers[0]).toBeInstanceOf(Subscriber);
		expect(test_sub.Subscribers[0].name).toBe('dlvlupTest');
		expect(test_sub.Subscribers[0].address).toBe('test@dlvlup.com');
	});

	test('Add tag to Subscription', () => {
		test_sub.addTag('testingSub');
		expect(test_sub.tags).toContain('testingSub');
		expect(test_sub.tags).toHaveLength(1);
	});

	test('Unsubscribe from Subscription', () => {
		expect(test_sub.unsubscribe('test@dlvlup.com')).toBeTruthy();
		expect(test_sub.Subscribers).toHaveLength(0);
	});

	test('Remove Tag from Subscription', () => {
		expect(test_sub.removeTag('testingSub')).toBeTruthy();
		expect(test_sub.tags).toHaveLength(0);
	});
});

describe('Subscriber Class Test Suite:', () => {

	const subscriber = new Subscriber({address: 'test@dlvlup.com', name: 'dlvlupTest'});

	test('Change Subscriber Email', () => {
		subscriber.changeEmail('dlvlup@test.com');
		expect(subscriber.address).toBe('dlvlup@test.com');
	});
});





