export const scenario_snowy_bluster_19_05 = {
	"scenario_id": "snowy_bluster_19_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "pool_Snowman_Bluster_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 동굴, 그 안에서 심장을 울리는 낮은 진동이 느껴진다.",
						"english": "A colossal ice cave, within it, a low vibration that makes the heart pound is felt.",
						"japanese": "巨大な氷の洞窟、その中で心臓を揺さぶる低い振動が感じられる。",
						"chinese": "巨大的冰洞中，感受到一股低沉的震动，令人心悸。",
						"french": "Une grotte de glace colossale, à l'intérieur, une faible vibration qui fait battre le cœur est ressentie.",
						"spanish": "Una cueva de hielo colosal, dentro de ella se siente una baja vibración que hace latir el corazón.",
						"vietnamese": "Một hang động băng khổng lồ, bên trong, một rung động thấp khiến tim đập mạnh được cảm nhận.",
						"thai": "ถ้ำน้ำแข็งขนาดยักษ์ ภายในนั้นรู้สึกได้ถึงแรงสั่นสะเทือนต่ำที่ทำให้หัวใจเต้นแรง",
						"hindi": "एक विशाल बर्फ की गुफा, उसके भीतर, एक कम कंपन महसूस होता है जो दिल को धड़काता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 소문의 근원인가.",
						"english": "Is this... the source of the rumors?",
						"japanese": "ここが… 噂の根源なのか。",
						"chinese": "这里就是… 传闻的源头吗？",
						"french": "Est-ce ici... la source des rumeurs ?",
						"spanish": "¿Es esto... el origen de los rumores?",
						"vietnamese": "Đây có phải... là nguồn gốc của những tin đồn không?",
						"thai": "นี่คือ... ต้นตอของข่าวลือหรือเปล่า?",
						"hindi": "क्या यह... अफवाहों का स्रोत है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "하마터면 길을 잃을 뻔했잖아! 여기까지 오다니, 용감한 건지 무모한 건지.",
						"english": "Almost got lost! Coming all this way, I wonder if you're brave or just reckless.",
						"japanese": "危うく道に迷うところだったじゃないか！ここまで来るなんて、勇敢なのか無謀なのか。",
						"chinese": "差点迷路了！能走到这里，是勇敢还是鲁莽呢？",
						"french": "J'ai failli me perdre ! Venir jusqu'ici, est-ce du courage ou de la folie ?",
						"spanish": "¡Casi me pierdo! Llegar hasta aquí, ¿es valentía o imprudencia?",
						"vietnamese": "Suýt nữa thì lạc đường rồi! Đến được đây, không biết là dũng cảm hay liều lĩnh nữa.",
						"thai": "เกือบหลงทางแล้วไง! มาถึงที่นี่ได้นี่ จะเรียกว่ากล้าหาญหรือบ้าระห่ำดีนะ?",
						"hindi": "मैं तो लगभग रास्ता ही भटक गया था! इतनी दूर आ गए, यह बहादुरी है या लापरवाही?"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어쩐 일이야, 에이라?",
						"english": "What brings you here, Eira?",
						"japanese": "どうしたんだい、エイラ？",
						"chinese": "艾拉，你怎么来了？",
						"french": "Qu'est-ce qui t'amène, Eira ?",
						"spanish": "¿Qué te trae por aquí, Eira?",
						"vietnamese": "Có chuyện gì vậy, Eira?",
						"thai": "มีอะไรเหรอ, เอร่า?",
						"hindi": "क्या बात है, ऐरा?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "문득 오래된 민담이 떠올라서 말이야. 이 근방에 전설적인 허풍쟁이 족장이 있었다던가?",
						"english": "It just reminded me of an old folk tale. Wasn't there a legendary bragging chieftain around here?",
						"japanese": "ふと、古い民話が頭をよぎったんだ。この辺りに伝説的なホラ吹き族長がいたって話、知ってるかい？",
						"chinese": "突然想起一个古老的民间传说。这附近是不是有个爱吹牛的传奇酋长？",
						"french": "Une vieille légende me revient en tête. Il n'y aurait pas eu un chef vantard légendaire dans le coin ?",
						"spanish": "Me vino a la mente una antigua leyenda. ¿No había por aquí un cacique legendario y fanfarrón?",
						"vietnamese": "Tự nhiên tôi nhớ đến một truyền thuyết cổ. Hình như quanh đây có một tù trưởng khoác lác huyền thoại thì phải?",
						"thai": "จู่ๆ ก็นึกถึงนิทานพื้นบ้านเก่าๆ ขึ้นมาน่ะ ที่ว่าแถวนี้เคยมีหัวหน้าเผ่าจอมโอ้อวดในตำนานอะไรนั่นน่ะ?",
						"hindi": "अचानक मुझे एक पुरानी लोककथा याद आ गई। क्या इस इलाके में कोई पौराणिक शेखीबाज़ सरदार था?"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그 족장이 말이야, 너무 허풍이 심해서 신의 노여움을 샀다는 얘기가 있어.",
						"english": "They say that chieftain was such a big braggart, he earned the wrath of a god.",
						"japanese": "その族長はね、あまりにもホラ吹きがひどくて、神の怒りを買ったって話があるんだ。",
						"chinese": "听说那个酋长吹牛太过分，招惹了神的愤怒。",
						"french": "On raconte que ce chef était tellement vantard qu'il a attiré la colère des dieux.",
						"spanish": "Dicen que ese cacique era tan fanfarrón que se ganó la ira de un dios.",
						"vietnamese": "Nghe nói vị tù trưởng đó khoác lác quá mức, nên đã chọc giận thần linh.",
						"thai": "เขาเล่ากันว่าหัวหน้าเผ่าคนนั้นโอ้อวดเกินไป จนไปสร้างความโกรธให้กับเทพเจ้าเข้าแล้วล่ะ",
						"hindi": "कहा जाता है कि वह सरदार इतना शेखीबाज़ था कि उसने एक देवता का प्रकोप मोल ले लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "허풍이 심해서? 재밌는 신이네.",
						"english": "Because of bragging? What an amusing god.",
						"japanese": "ホラ吹きが原因で？面白い神様だね。",
						"chinese": "因为吹牛？真是个有趣的、神。",
						"french": "À cause de la vantardise ? Quel drôle de dieu.",
						"spanish": "¿Por fanfarrón? Qué dios tan peculiar.",
						"vietnamese": "Vì khoác lác ư? Thần linh thú vị thật đấy.",
						"thai": "เพราะการโอ้อวดงั้นเหรอ? เป็นเทพเจ้าที่น่าสนใจดีนะ",
						"hindi": "शेखीबाज़ी की वजह से? क्या मज़ेदार देवता है।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 그래서 결국… 무언가로 변해버렸다는 소문이 돌았지. 아무도 안 믿었지만.",
						"english": "Yeah. So eventually... rumors spread that he was turned into something. Though no one believed it.",
						"japanese": "うん。それで結局…何かに姿を変えられてしまったって噂が広まったんだ。誰も信じてなかったけどね。",
						"chinese": "嗯。所以最后…有传闻说他变成了某种东西。虽然没人相信。",
						"french": "Oui. Et finalement... la rumeur disait qu'il s'était transformé en quelque chose. Personne n'y croyait, cela dit.",
						"spanish": "Sí. Y al final... se rumoreó que se había transformado en algo. Aunque nadie lo creyó.",
						"vietnamese": "Ừ. Nên cuối cùng... có tin đồn rằng ông ta đã biến thành một thứ gì đó. Dù không ai tin cả.",
						"thai": "อืมม์ แล้วสุดท้าย… ก็มีข่าวลือว่าเขาได้กลายร่างเป็นอะไรบางอย่างไปแล้วน่ะ ไม่มีใครเชื่อหรอกนะ",
						"hindi": "हाँ। और अंत में… अफवाहें फैलीं कि वह किसी चीज़ में बदल गया। हालांकि किसी ने भी उस पर विश्वास नहीं किया।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 멀리서 들리던 그 웅얼거림… 혹시 그 족장의 한 맺힌 잔소리가 아니었을까?",
						"english": "And that mumbling sound heard from afar... could it have been the chieftain's grudging nagging?",
						"japanese": "そして遠くから聞こえていたあのうめき声…もしかしたら、あの族長の恨めしい小言だったんじゃないかってね？",
						"chinese": "还有远处传来的那低语…会不会是那个酋长带着怨恨的唠叨呢？",
						"french": "Et ce marmonnement qu'on entendait de loin... N'était-ce pas les reproches rancuniers de ce chef ?",
						"spanish": "Y ese murmullo que se escuchaba de lejos... ¿Quizás eran los lamentos rencorosos de ese cacique?",
						"vietnamese": "Và tiếng lẩm bẩm vọng lại từ xa đó… Chẳng lẽ đó là lời cằn nhằn đầy oán hận của vị tù trưởng đó sao?",
						"thai": "แล้วเสียงพึมพำที่ได้ยินมาจากที่ไกลๆ นั่น… หรือว่าจะเป็นเสียงบ่นพึมพำด้วยความอาฆาตแค้นของหัวหน้าเผ่าคนนั้นกันนะ?",
						"hindi": "और दूर से सुनाई देने वाली वह बुदबुदाहट… कहीं वह उस सरदार की नाराज़ बड़बड़ाहट तो नहीं थी?"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "맞아, 눈의 정령! 그 허풍쟁이 족장은 오만한 자랑을 일삼다가 눈의 정령을 모독했대.",
						"english": "That's right, the Snow Spirit! That bragging chieftain kept boasting arrogantly and insulted the Snow Spirit.",
						"japanese": "そう、雪の精霊！あのホラ吹き族長は傲慢な自慢ばかりして、雪の精霊を侮辱したんだって。",
						"chinese": "没错，是雪之精灵！那个爱吹牛的酋长总是傲慢地炫耀，亵渎了雪之精灵。",
						"french": "Exact, l'esprit des neiges ! Ce chef vantard n'arrêtait pas de se vanter avec arrogance et a insulté l'esprit des neiges.",
						"spanish": "¡Exacto, el espíritu de la nieve! Se dice que ese cacique fanfarrón se jactaba arrogantemente y ofendió al espíritu de la nieve.",
						"vietnamese": "Đúng vậy, Tinh linh Tuyết! Vị tù trưởng khoác lác đó đã kiêu ngạo khoe khoang liên tục và xúc phạm Tinh linh Tuyết.",
						"thai": "ใช่แล้ว, เทพหิมะ! หัวหน้าเผ่าจอมโอ้อวดคนนั้นเอาแต่โอ้อวดอย่างเย่อหยิ่ง จนไปลบหลู่เทพหิมะเข้า",
						"hindi": "हाँ, बर्फ़ की आत्मा! वह शेखीबाज़ सरदार घमंड से अपनी बड़ाई करता रहता था और उसने बर्फ़ की आत्मा का अपमान किया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "눈의 정령이 그렇게 화를 냈다고?",
						"english": "The Snow Spirit got that angry?",
						"japanese": "雪の精霊がそこまで怒ったって？",
						"chinese": "雪之精灵气成那样了？",
						"french": "L'esprit des neiges s'est fâché à ce point ?",
						"spanish": "¿El espíritu de la nieve se enfadó tanto?",
						"vietnamese": "Tinh linh Tuyết đã tức giận đến thế ư?",
						"thai": "เทพหิมะโกรธขนาดนั้นเลยเหรอ?",
						"hindi": "बर्फ़ की आत्मा इतनी नाराज़ हो गई?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "응. 그래서 그 족장을… 영원히 자신의 이야기를 들어줄 대상을 찾아 헤매는 존재로 만들었다는 얘기가….",
						"english": "Yeah. So they say the chieftain was... turned into a being doomed to wander, seeking someone to listen to his stories forever.",
						"japanese": "うん。それで、その族長を…永遠に自分の話を聞いてくれる相手を探し求める存在に変えたって話がね…。",
						"chinese": "嗯。所以…就有传闻说那个酋长被变成了…一个永远寻找倾听自己故事的存在的生物。",
						"french": "Oui. Et donc, ils racontent que le chef a été... transformé en une entité condamnée à errer éternellement, à la recherche de quelqu'un pour écouter ses histoires.",
						"spanish": "Sí. Y dicen que a ese cacique... lo transformó en un ser condenado a vagar eternamente, buscando a alguien que escuche sus historias.",
						"vietnamese": "Ừ. Nên có chuyện kể rằng vị tù trưởng đó đã bị… biến thành một sinh vật mãi mãi lang thang tìm kiếm người để nghe câu chuyện của mình.",
						"thai": "อืมม์ แล้วก็มีเรื่องเล่าว่าเทพหิมะได้ทำให้หัวหน้าเผ่าคนนั้น… กลายเป็นสิ่งมีชีวิตที่ต้องออกตามหาผู้ที่จะฟังเรื่องราวของตนไปตลอดกาล",
						"hindi": "हाँ। तो कहते हैं कि उस सरदार को… एक ऐसे प्राणी में बदल दिया गया जो हमेशा अपनी कहानियाँ सुनने वाले की तलाश में भटकता रहता है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 안이야. 저 깊은 곳에 그 족장이… 아니, 눈사람 괴물이 있을 거야.",
						"english": "It's in there. Deep inside, that chieftain... no, the snowman monster will be there.",
						"japanese": "あそこだ。あの奥深くに、あの族長が…いや、雪だるまの怪物がいるはずだ。",
						"chinese": "就在里面。深处，那个酋长……不，雪人怪物应该在那里。",
						"french": "C'est là-dedans. Au plus profond, ce chef... non, le monstre des neiges sera là.",
						"spanish": "Está ahí dentro. En lo más profundo, ese jefe... no, el monstruo de nieve estará allí.",
						"vietnamese": "Nó ở trong đó. Sâu bên trong, tộc trưởng đó... không, con quái vật người tuyết sẽ ở đó.",
						"thai": "อยู่ข้างในนั้น. ลึกเข้าไปข้างใน หัวหน้าเผ่าคนนั้น... ไม่สิ สัตว์ประหลาดมนุษย์หิมะคงจะอยู่ที่นั่น.",
						"hindi": "वह अंदर है। उस गहराई में, वह सरदार... नहीं, हिममानव राक्षस होगा।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "소문은 그렇게 요란했지만, 사실은… 외로웠던 건가.",
						"english": "The rumors were so wild, but in truth... was it lonely?",
						"japanese": "噂はあれほど騒がしかったが、実際は…寂しかったのか。",
						"chinese": "传闻如此喧嚣，但实际上……是寂寞吗？",
						"french": "Les rumeurs étaient si folles, mais en vérité... était-il solitaire ?",
						"spanish": "Los rumores eran tan salvajes, pero en realidad... ¿estaba solo?",
						"vietnamese": "Tin đồn thì ồn ào thế, nhưng sự thật... là cô đơn ư?",
						"thai": "ข่าวลือดังกระหึ่มขนาดนั้น แต่ความจริงแล้ว... มันเหงาเหรอ?",
						"hindi": "अफवाहें इतनी जोरदार थीं, लेकिन असल में... क्या वह अकेला था?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모르겠어. 하지만 확실한 건, 이곳을 지나면 이제 돌아갈 수 없어.",
						"english": "I don't know. But one thing's for sure, once we pass this point, there's no turning back.",
						"japanese": "わからない。だが確かなのは、ここを過ぎればもう引き返せない。",
						"chinese": "我不知道。但可以肯定的是，一旦我们越过这里，就无法回头了。",
						"french": "Je ne sais pas. Mais une chose est sûre, une fois que nous aurons passé cet endroit, il n'y aura plus de retour possible.",
						"spanish": "No lo sé. Pero una cosa es segura, una vez que pasemos este punto, no habrá vuelta atrás.",
						"vietnamese": "Tôi không biết. Nhưng có một điều chắc chắn, một khi đã qua đây, sẽ không thể quay lại được nữa.",
						"thai": "ไม่รู้สิ แต่ที่แน่ๆ คือ ถ้าผ่านตรงนี้ไปแล้ว ก็จะกลับไม่ได้อีกแล้ว.",
						"hindi": "मुझे नहीं पता। लेकिन एक बात निश्चित है, एक बार हम इस बिंदु को पार कर गए, तो कोई वापसी नहीं होगी।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으으… 결국 너희도 내 이야기가 지겨워진 거냐? 어쩔 수 없지. 언젠가 다시 돌아와서 더 위대한 이야기를 들려줄 테다!",
						"english": "Hmph… so you too grew tired of my stories? Fine. I'll return someday to tell even grander tales!",
						"japanese": "ふん…結局お前たちも俺の話に飽きたか？仕方ない。いつかまた戻ってきて、もっと偉大な話を聞かせてやる！",
						"chinese": "哼…你们也听腻了我的故事吗？没办法。总有一天我会回来，讲述更伟大的故事！",
						"french": "Hmpf… alors vous aussi, vous vous êtes lassés de mes histoires ? Bien. Je reviendrai un jour pour raconter des contes encore plus grandioses !",
						"spanish": "Mmm… ¿así que vosotros también os cansasteis de mis historias? De acuerdo. ¡Algún día volveré para contaros relatos aún más grandiosos!",
						"vietnamese": "Hừm… cuối cùng thì các ngươi cũng chán nghe chuyện của ta rồi sao? Thôi được. Một ngày nào đó ta sẽ trở lại và kể những câu chuyện vĩ đại hơn nữa!",
						"thai": "หึ่ม… ในที่สุดพวกเจ้าก็เบื่อเรื่องราวของข้าแล้วรึ? ช่างเถอะ วันใดวันหนึ่งข้าจะกลับมาเล่าเรื่องราวที่ยิ่งใหญ่กว่านี้ให้ฟัง!",
						"hindi": "हूँ… तो तुम भी मेरी कहानियों से ऊब गए? ठीक है। मैं किसी दिन और भी महान कहानियाँ सुनाने वापस आऊँगा!"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝난 게 맞겠지?",
						"english": "…It's really over, right?",
						"japanese": "…本当に終わったんだよね？",
						"chinese": "…真的结束了吧？",
						"french": "…C'est bien fini, n'est-ce pas ?",
						"spanish": "…¿De verdad ha terminado, verdad?",
						"vietnamese": "…Chắc là kết thúc rồi nhỉ?",
						"thai": "…มันจบแล้วจริงๆ ใช่ไหม?",
						"hindi": "…यह सच में खत्म हो गया है, है ना?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그의 저주가 풀린 건지, 아니면 잠시 잠든 건지… 그래도 이젠 소란스럽지 않네.",
						"english": "Has his curse been lifted, or is he merely dormant? Either way, it's quiet now.",
						"japanese": "彼の呪いが解けたのか、それとも一時的に眠っているだけなのか…それでも今は騒がしくない。",
						"chinese": "他的诅咒解除了，还是只是暂时沉睡了…总之，现在不吵了。",
						"french": "Sa malédiction a-t-elle été levée, ou dort-il simplement ? Quoi qu'il en soit, le calme est revenu.",
						"spanish": "¿Se habrá roto su maldición, o estará solo dormido? De cualquier forma, ahora ya no hay ruido.",
						"vietnamese": "Lời nguyền của hắn đã được giải, hay hắn chỉ tạm thời ngủ yên? Dù sao thì, giờ đây đã không còn ồn ào nữa.",
						"thai": "คำสาปของเขาถูกถอนแล้วหรือเขากำลังหลับใหลอยู่… ไม่ว่าจะอย่างไร ตอนนี้ก็ไม่วุ่นวายแล้ว",
						"hindi": "क्या उसका शाप टूट गया है, या वह बस सो गया है… फिर भी, अब शोर नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 눈사람 블러스터는 조용해졌다. 그를 둘러싼 공포는 사라졌지만, 그 비극적인 허풍쟁이의 이야기는 이제 진실을 알게 된 자들의 기억 속에 영원히 남을 것이다.",
						"english": "The colossal snowman Bluster has fallen silent. The terror surrounding him has vanished, but the tale of that tragic braggart will forever remain in the memories of those who now know the truth.",
						"japanese": "巨大な雪だるまブラスターは静かになった。彼を取り巻く恐怖は消え去ったが、あの悲劇的な虚勢家の物語は、今や真実を知る者たちの記憶に永遠に残るだろう。",
						"chinese": "巨大的雪人布拉斯特安静下来了。围绕着他的恐惧消失了，但那个悲剧的吹牛大王的故事将永远留在那些知晓真相的人的记忆中。",
						"french": "L'énorme bonhomme de neige Bluster s'est tu. La terreur qui l'entourait a disparu, mais l'histoire de ce fanfaron tragique restera à jamais dans la mémoire de ceux qui connaissent maintenant la vérité.",
						"spanish": "El colosal muñeco de nieve Bluster ha enmudecido. El terror que lo rodeaba ha desaparecido, pero la historia de ese trágico fanfarrón permanecerá para siempre en la memoria de aquellos que ahora conocen la verdad.",
						"vietnamese": "Người tuyết khổng lồ Bluster đã im lặng. Nỗi kinh hoàng bao trùm hắn đã tan biến, nhưng câu chuyện về tên khoác lác bi thảm đó sẽ mãi mãi còn trong ký ức của những người đã biết sự thật.",
						"thai": "สโนว์แมนยักษ์บลัสเทอร์เงียบลงแล้ว ความหวาดกลัวที่รายล้อมเขาได้หายไป แต่เรื่องราวของคนโอ้อวดผู้โศกเศร้านั้นจะยังคงอยู่ในความทรงจำของผู้ที่ได้รับรู้ความจริงตลอดไป",
						"hindi": "विशालकाय हिममानव ब्लस्टर शांत हो गया है। उसके चारों ओर का आतंक गायब हो गया है, लेकिन उस दुखद शेखीखोर की कहानी अब सच्चाई जानने वालों की यादों में हमेशा के लिए बनी रहेगी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하핫! 아직도 내 위대한 이야기를 다 듣지 못했군! 내가 얼마나 대단한 족장이었는지, 다시 와서 들어라!",
						"english": "Khah-hah! You still haven't heard all my grand tales! Come back and listen to how magnificent a chieftain I was!",
						"japanese": "クハハッ！まだ俺の偉大な話を全部聞いてないじゃないか！俺がいかに偉大な族長だったか、また来て聞け！",
						"chinese": "哈哈哈！你们还没听完我伟大的故事呢！再回来听听我曾是多么了不起的酋长吧！",
						"french": "Hahaha ! Vous n'avez pas encore entendu tous mes grands récits ! Revenez et écoutez à quel point j'étais un magnifique chef !",
						"spanish": "¡Jajaja! ¡Todavía no habéis escuchado todas mis grandes historias! ¡Volved y escuchad lo magnífico que fui como jefe!",
						"vietnamese": "Kha-kha-kha! Các ngươi vẫn chưa nghe hết những câu chuyện vĩ đại của ta! Hãy quay lại và lắng nghe ta đã là một tù trưởng vĩ đại như thế nào!",
						"thai": "คิกคัก! พวกเจ้ายังฟังเรื่องราวอันยิ่งใหญ่ของข้าไม่จบเลย! กลับมาฟังอีกครั้งว่าข้าเป็นหัวหน้าที่ยิ่งใหญ่เพียงใด!",
						"hindi": "खाह-हाह! तुमने अभी तक मेरी सारी महान कहानियाँ नहीं सुनी हैं! वापस आओ और सुनो कि मैं कितना शानदार सरदार था!"
					},
					"emotion": "happy",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "망할 잔소리…! 다시 와서 네 입을 막아주겠어!",
						"english": "Damn this nagging…! I'll come back and shut your mouth!",
						"japanese": "忌々しい小言め…！また来てお前の口を塞いでやる！",
						"chinese": "该死的唠叨…！我会回来堵住你的嘴！",
						"french": "Maudits bavardages… ! Je reviendrai te faire taire !",
						"spanish": "¡Maldita charla…! ¡Volveré para callarte la boca!",
						"vietnamese": "Cái lời lảm nhảm đáng ghét…! Ta sẽ quay lại và bịt miệng ngươi!",
						"thai": "ไอ้คำบ่นน่ารำคาญ…! ข้าจะกลับมาและปิดปากเจ้าเอง!",
						"hindi": "यह शापित बकबक…! मैं वापस आकर तुम्हारा मुंह बंद कर दूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 눈덩이가 꿈틀거리더니, 쩌렁쩌렁한 목소리가 동굴을 뒤흔든다.",
						"english": "A giant snowball twitches, and a booming voice shakes the cave.",
						"japanese": "巨大な雪玉が蠢き、轟くような声が洞窟を揺るがす。",
						"chinese": "一个巨大的雪球扭动着，洪亮的声音震撼着洞穴。",
						"french": "Une énorme boule de neige frémit, et une voix retentissante secoue la caverne.",
						"spanish": "Una bola de nieve gigante se estremece, y una voz atronadora sacude la cueva.",
						"vietnamese": "Một quả cầu tuyết khổng lồ rung động, và một giọng nói vang dội làm rung chuyển hang động.",
						"thai": "ก้อนหิมะขนาดยักษ์กระตุกเบาๆ แล้วเสียงกึกก้องก็สั่นสะเทือนถ้ำ.",
						"hindi": "एक विशाल हिमखंड हिलता है, और एक गड़गड़ाती आवाज गुफा को हिला देती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크하핫! 드디어 내 진가를 알아본 자들이 나타났군! 내 이름은 블러스터!",
						"english": "Kwahaha! Finally, those who recognize my true worth have appeared! My name is Bluster!",
						"japanese": "クハハッ！ついに我が真価を理解する者たちが現れたか！我が名はブラスター！",
						"chinese": "哈哈哈！终于，那些认清我真正价值的人出现了！我的名字是布拉斯塔！",
						"french": "Kwahaha ! Enfin, ceux qui reconnaissent ma vraie valeur sont apparus ! Mon nom est Bluster !",
						"spanish": "¡Jajaja! ¡Finalmente, han aparecido quienes reconocen mi verdadero valor! ¡Mi nombre es Bluster!",
						"vietnamese": "Khakha! Cuối cùng, những kẻ nhận ra giá trị thực sự của ta đã xuất hiện! Tên ta là Bluster!",
						"thai": "คิกคิก! ในที่สุด ผู้ที่ตระหนักถึงคุณค่าที่แท้จริงของข้าก็ปรากฏตัวขึ้น! ข้าชื่อบลัสเตอร์!",
						"hindi": "क्वाहाहा! आखिरकार, वे लोग आ गए जिन्होंने मेरी असली कीमत पहचान ली! मेरा नाम ब्लस्टर है!"
					},
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "한때 북방을 호령하던 전설적인 허풍쟁이, 아니, 음유시인… 젠장, 눈의 정령 녀석!",
						"english": "A legendary braggart who once ruled the north, no, a bard... Damn it, that Snow Spirit!",
						"japanese": "かつて北方を支配した伝説的なほら吹き、いや、吟遊詩人…ちくしょう、雪の精霊め！",
						"chinese": "一个曾一度统治北方的传奇吹牛大王，不，是一个吟游诗人……该死的，那个雪之精灵！",
						"french": "Un vantard légendaire qui régnait autrefois sur le nord, non, un barde... Zut, ce fichu Esprit des Neiges !",
						"spanish": "Un legendario fanfarrón que una vez gobernó el norte, no, un bardo... ¡Maldita sea, ese Espíritu de la Nieve!",
						"vietnamese": "Một kẻ khoác lác huyền thoại từng thống trị phương Bắc, không, một người hát rong... Chết tiệt, cái tinh linh tuyết đó!",
						"thai": "จอมโอ้อวดในตำนานที่ครั้งหนึ่งเคยปกครองทางเหนือ ไม่สิ กวี... ให้ตายสิ เจ้าวิญญาณหิมะนั่น!",
						"hindi": "एक महान शेखीखोर जिसने कभी उत्तर पर राज किया था, नहीं, एक बार्ड... धिक्कार है, वह हिम आत्मा!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블러스터… 바이킹 서적에 나온 그 족장!",
						"english": "Bluster... the chieftain mentioned in the Viking texts!",
						"japanese": "ブラスター…バイキングの書物に出てきた、あの族長か！",
						"chinese": "布拉斯塔……维京典籍中提到的那个酋长！",
						"french": "Bluster... le chef mentionné dans les textes vikings !",
						"spanish": "¡Bluster... el jefe mencionado en los textos vikingos!",
						"vietnamese": "Bluster... tộc trưởng được nhắc đến trong sách của người Viking!",
						"thai": "บลัสเตอร์... หัวหน้าเผ่าที่กล่าวถึงในตำราไวกิ้ง!",
						"hindi": "ब्लस्टर... वाइकिंग ग्रंथों में वर्णित वह सरदार!"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "정말 그 전설이 사실이었어! 그가 바로 눈사람 괴물이었어!",
						"english": "The legend was really true! He was the snowman monster!",
						"japanese": "本当にあの伝説が真実だったなんて！彼こそが雪だるまの怪物だったんだ！",
						"chinese": "那个传说竟然是真的！他就是雪人怪物！",
						"french": "Cette légende était vraiment vraie ! C'était le monstre des neiges !",
						"spanish": "¡La leyenda era realmente cierta! ¡Él era el monstruo de nieve!",
						"vietnamese": "Huyền thoại đó quả thực là thật! Hắn chính là con quái vật người tuyết!",
						"thai": "ตำนานนั้นเป็นเรื่องจริง! เขาคือสัตว์ประหลาดมนุษย์หิมะ!",
						"hindi": "वह किंवदंती वास्तव में सच थी! वह हिममानव राक्षस था!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어서 내 위대한 무용담을 다시 세상에 전파할 방법을 찾으란 말이다! 아니면… 그냥 여기서 내 이야기나 좀 들어줘!",
						"english": "Hurry and find a way to spread my glorious tales to the world again! Or... just listen to my story here!",
						"japanese": "早く私の偉大な武勇伝を再び世に広める方法を探せ！さもなくば…ここで私の話を聞いてくれ！",
						"chinese": "快点找到方法，将我的伟大英勇事迹再次传播到全世界！不然……就只是在这里听我讲故事！",
						"french": "Dépêchez-vous de trouver un moyen de répandre mes glorieux récits dans le monde entier ! Ou... écoutez simplement mon histoire ici !",
						"spanish": "¡Rápido, encuentra una manera de difundir mis gloriosas hazañas por el mundo de nuevo! O... ¡simplemente escucha mi historia aquí!",
						"vietnamese": "Mau tìm cách truyền bá những câu chuyện vĩ đại của ta ra thế giới một lần nữa đi! Hoặc... chỉ cần nghe câu chuyện của ta ở đây thôi!",
						"thai": "รีบไปหาวิธีเผยแพร่วีรกรรมอันยิ่งใหญ่ของข้าไปทั่วโลกอีกครั้งเดี๋ยวนี้! ไม่อย่างนั้น... ก็แค่ฟังเรื่องของข้าที่นี่!",
						"hindi": "जल्दी करो और दुनिया में मेरी शानदार कहानियों को फिर से फैलाने का कोई तरीका ढूंढो! या... बस यहीं मेरी कहानी सुनो!"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "아무도 안 들어주니 너무 답답하잖느냐! 내 자랑이 좀 과했을 뿐인데 이렇게 얼음 덩어리로 만들다니!",
						"english": "Isn't it frustrating that no one listens! All I did was boast a little too much, and they turned me into a block of ice!",
						"japanese": "誰も聞いてくれないから、こんなに息苦しいじゃないか！ちょっと自慢しすぎただけなのに、こんな氷の塊にされるなんて！",
						"chinese": "没有人听我说，难道不觉得很郁闷吗！我只是稍微夸耀了一下，竟然就被变成了冰块！",
						"french": "N'est-ce pas frustrant que personne n'écoute ! Tout ce que j'ai fait, c'était me vanter un peu trop, et ils m'ont transformé en bloc de glace !",
						"spanish": "¡No es frustrante que nadie escuche! ¡Todo lo que hice fue presumir un poco demasiado, y me convirtieron en un bloque de hielo!",
						"vietnamese": "Chẳng phải rất bực bội khi không ai lắng nghe sao! Ta chỉ khoác lác hơi quá một chút, vậy mà họ đã biến ta thành một khối băng!",
						"thai": "มันน่าหงุดหงิดไม่ใช่เหรอที่ไม่มีใครฟัง! ข้าแค่โอ้อวดไปหน่อยเอง ทำไมถึงโดนสาปให้เป็นก้อนน้ำแข็งแบบนี้!",
						"hindi": "क्या यह निराशाजनक नहीं है कि कोई सुनता नहीं! मैंने बस थोड़ी ज्यादा शेखी बघारी थी, और उन्होंने मुझे बर्फ के टुकड़े में बदल दिया!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 소란이… 단지 이야기를 들어달라는 외침이었다니.",
						"english": "All this commotion… just a cry to be heard.",
						"japanese": "この騒ぎのすべてが…ただ話を聞いてほしかったというのか。",
						"chinese": "所有的喧嚣…都只是一个求助的呼喊。",
						"french": "Tout ce remue-ménage… n'était qu'un cri pour être entendu.",
						"spanish": "Todo este alboroto… solo era un grito para ser escuchado.",
						"vietnamese": "Tất cả sự ồn ào này… chỉ là một lời cầu xin được lắng nghe.",
						"thai": "ความวุ่นวายทั้งหมดนี้…เป็นเพียงเสียงร้องขอให้รับฟัง",
						"hindi": "यह सब कोलाहल… बस एक कहानी सुनने की पुकार थी।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"눈보라가 걷히고, 북방의 산맥은 오랫동안 잃었던 고요함을 되찾았다.",
			"블러스터의 허풍은 멈췄지만, 그의 외로움은 여전히 공기 중에 맴도는 듯했다.",
			"마을의 공포는 사라졌지만, 그 자리에 남은 것은 예상치 못한 허탈함이었다.",
			"괴물은 없었다. 단지, 이야기를 들어줄 누군가를 간절히 원했던 이의 한숨만이."
		],
		"english": [
			"The blizzard receded, and the northern mountain range regained its long-lost tranquility.",
			"Bluster's bluster ceased, but his loneliness still seemed to linger in the air.",
			"The village's fear vanished, but what remained in its place was an unexpected sense of emptiness.",
			"There was no monster. Only the sigh of someone who desperately wanted someone to listen to their story."
		],
		"japanese": [
			"吹雪が収まり、北方の山脈は長い間失っていた静けさを取り戻した。",
			"ブラスターの虚勢は止んだが、彼の孤独はまだ空気中に漂っているようだった。",
			"村の恐怖は消え去ったが、その場に残ったのは予期せぬ虚脱感だった。",
			"怪物は存在しなかった。ただ、話を聞いてくれる誰かを切望していた者のため息だけが。"
		],
		"chinese": [
			"暴风雪消散，北方的山脉恢复了久违的宁静。",
			"布拉斯特的虚张声势停止了，但他的孤独似乎仍在空气中徘徊。",
			"村庄的恐惧消失了，取而代之的是一种意想不到的空虚感。",
			"没有怪物。只有一声叹息，那是某人渴望有人倾听自己故事的叹息。"
		],
		"french": [
			"Le blizzard s'est retiré, et la chaîne de montagnes du nord a retrouvé sa tranquillité perdue depuis longtemps.",
			"Les fanfaronnades de Bluster cessèrent, mais sa solitude semblait toujours planer dans l'air.",
			"La peur du village disparut, mais ce qui restait à sa place était un sentiment inattendu de vide.",
			"Il n'y avait pas de monstre. Seulement le soupir de quelqu'un qui désirait désespérément que quelqu'un écoute son histoire."
		],
		"spanish": [
			"La tormenta de nieve se disipó, y la cordillera del norte recuperó su tranquilidad largamente perdida.",
			"El alarde de Bluster cesó, pero su soledad aún parecía flotar en el aire.",
			"El miedo del pueblo desapareció, pero lo que quedó en su lugar fue una inesperada sensación de vacío.",
			"No había ningún monstruo. Solo el suspiro de alguien que deseaba desesperadamente que alguien escuchara su historia."
		],
		"vietnamese": [
			"Bão tuyết tan đi, và dãy núi phía bắc đã lấy lại sự yên tĩnh đã mất từ lâu.",
			"Lời khoác lác của Bluster đã dừng lại, nhưng sự cô đơn của anh ta dường như vẫn còn đọng lại trong không khí.",
			"Nỗi sợ hãi của làng đã tan biến, nhưng điều còn lại là một cảm giác trống rỗng bất ngờ.",
			"Không có quái vật. Chỉ là tiếng thở dài của một người khao khát có ai đó lắng nghe câu chuyện của mình."
		],
		"thai": [
			"พายุหิมะสงบลง และเทือกเขาทางเหนือก็กลับคืนสู่ความสงบที่หายไปนาน",
			"การโอ้อวดของบลัสเตอร์สิ้นสุดลง แต่ความโดดเดี่ยวของเขายังคงลอยอยู่ในอากาศ",
			"ความกลัวของหมู่บ้านหายไป แต่สิ่งที่เหลืออยู่คือความรู้สึกว่างเปล่าที่ไม่คาดคิด",
			"ไม่มีสัตว์ประหลาด มีเพียงแค่เสียงถอนหายใจของใครบางคนที่ต้องการใครสักคนมาฟังเรื่องราวของเขาอย่างสุดซึ้ง"
		],
		"hindi": [
			"बर्फीला तूफान थम गया, और उत्तरी पर्वत श्रृंखला ने अपनी लंबे समय से खोई हुई शांति पुनः प्राप्त कर ली।",
			"ब्लस्टर का डींग मारना बंद हो गया, लेकिन उसकी उदासी अभी भी हवा में मंडरा रही थी।",
			"गाँव का डर गायब हो गया, लेकिन उसकी जगह एक अप्रत्याशित शून्यता रह गई।",
			"कोई राक्षस नहीं था। केवल किसी ऐसे व्यक्ति की आह थी जो बेसब्री से चाहता था कि कोई उसकी कहानी सुने।"
		]
	},
	"prologue": {
		"korean": [
			"눈보라 속, 마침내 거대한 눈사람 괴물의 본거지에 도착했다.",
			"오래된 전설과 민담, 그리고 잊힌 기억들이 이곳에서 깨어나려 한다.",
			"진실을 토해내는 얼음 족장. 그의 이야기는 무엇일까?",
			"모든 공포가 해학으로, 모든 비극이 허탈함으로 변할 순간이 다가왔다."
		],
		"english": [
			"Amidst the blizzard, we finally arrived at the lair of the colossal snowman monster.",
			"Ancient legends, folk tales, and forgotten memories are about to awaken here.",
			"The Ice Chieftain, spitting out the truth. What could his story be?",
			"The moment is approaching when all horror will turn to humor, and all tragedy to emptiness."
		],
		"japanese": [
			"吹雪の中、ついに巨大な雪だるま怪物の本拠地に到着した。",
			"古い伝説、民話、そして忘れ去られた記憶が、ここで目覚めようとしている。",
			"真実を吐き出す氷の族長。彼の物語とは一体何だろうか？",
			"すべての恐怖がユーモアに、すべての悲劇が虚脱感に変わる瞬間が近づいている。"
		],
		"chinese": [
			"在暴风雪中，我们终于抵达了巨大雪人怪物的巢穴。",
			"古老的传说、民间故事以及被遗忘的记忆即将在此苏醒。",
			"冰霜酋长吐露着真相。他的故事会是什么呢？",
			"所有的恐惧都将化为幽默，所有的悲剧都将变为虚无的时刻即将来临。"
		],
		"french": [
			"Au milieu du blizzard, nous sommes enfin arrivés au repaire du monstre bonhomme de neige colossal.",
			"D'anciennes légendes, des contes populaires et des souvenirs oubliés sont sur le point de s'éveiller ici.",
			"Le chef de glace, crachant la vérité. Quelle pourrait bien être son histoire ?",
			"Le moment approche où toute horreur se transformera en humour, et toute tragédie en vide."
		],
		"spanish": [
			"En medio de la tormenta de nieve, finalmente llegamos a la guarida del colosal monstruo de nieve.",
			"Antiguas leyendas, cuentos populares y recuerdos olvidados están a punto de despertar aquí.",
			"El Jefe de Hielo, escupiendo la verdad. ¿Cuál será su historia?",
			"Se acerca el momento en que todo el horror se convertirá en humor y toda la tragedia en una sensación de vacío."
		],
		"vietnamese": [
			"Giữa bão tuyết, chúng tôi cuối cùng đã đến được hang ổ của quái vật người tuyết khổng lồ.",
			"Những truyền thuyết cổ xưa, truyện dân gian và ký ức bị lãng quên sắp thức tỉnh tại đây.",
			"Thủ lĩnh Băng đang nói ra sự thật. Câu chuyện của ông ta là gì?",
			"Khoảnh khắc mà mọi nỗi kinh hoàng sẽ biến thành hài hước, và mọi bi kịch thành sự trống rỗng đang đến gần."
		],
		"thai": [
			"ท่ามกลางพายุหิมะ ในที่สุดเราก็มาถึงรังของสัตว์ประหลาดมนุษย์หิมะขนาดยักษ์",
			"ตำนานเก่าแก่ นิทานพื้นบ้าน และความทรงจำที่ถูกลืมกำลังจะตื่นขึ้นที่นี่",
			"หัวหน้าเผ่าหิมะผู้คายความจริง เรื่องราวของเขาคืออะไรกันนะ?",
			"ช่วงเวลาที่ความน่ากลัวทั้งหมดจะกลายเป็นเรื่องตลก และโศกนาฏกรรมทั้งหมดจะกลายเป็นความว่างเปล่ากำลังใกล้เข้ามา"
		],
		"hindi": [
			"बर्फीले तूफान के बीच, हम आखिरकार विशाल हिममानव राक्षस के ठिकाने पर पहुँच गए।",
			"प्राचीन किंवदंतियाँ, लोक कथाएँ और भूली हुई यादें यहाँ जागने वाली हैं।",
			"बर्फीला सरदार, सच उगल रहा है। उसकी कहानी क्या हो सकती है?",
			"वह क्षण निकट आ रहा है जब सारा भय हास्य में बदल जाएगा, और सारी त्रासदी व्यर्थता में बदल जाएगी।"
		]
	}
} as const;
