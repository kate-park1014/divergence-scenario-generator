export const scenario_desert_sahar_35_03 = {
	"scenario_id": "desert_sahar_35_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래바람이 지워버린 흔적. 잊힌 시장에는 기묘한 향이 맴돌았다.",
						"english": "Traces erased by sandstorms. A peculiar scent lingered in the forgotten market.",
						"japanese": "砂嵐が消し去った痕跡。忘れられた市場には奇妙な香りが漂っていた。",
						"chinese": "沙尘暴抹去了痕迹。被遗忘的市集里弥漫着奇异的香气。",
						"french": "Des traces effacées par les tempêtes de sable. Un parfum étrange planait sur le marché oublié.",
						"spanish": "Huellas borradas por las tormentas de arena. Un aroma peculiar flotaba en el mercado olvidado.",
						"vietnamese": "Dấu vết bị bão cát xóa nhòa. Một mùi hương kỳ lạ thoảng quanh khu chợ bị lãng quên.",
						"thai": "ร่องรอยที่ถูกพายุทรายลบเลือน กลิ่นแปลกประหลาดอบอวลอยู่ในตลาดที่ถูกลืม",
						"hindi": "रेत के तूफानों से मिटे निशान। भूले हुए बाज़ार में एक अजीबोगरीब गंध थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이상한 냄새… 여기가 그 시장인가.",
						"english": "Strange smell... Is this that market?",
						"japanese": "変な匂い…ここがその市場なのか。",
						"chinese": "奇怪的味道……这里就是那个市集吗？",
						"french": "Étrange odeur... Est-ce ça, ce marché ?",
						"spanish": "Un olor extraño... ¿Es este el mercado?",
						"vietnamese": "Mùi lạ quá... Đây là khu chợ đó sao?",
						"thai": "กลิ่นแปลกๆ... ที่นี่คือตลาดนั้นหรือ",
						"hindi": "अजीब गंध... क्या यह वही बाज़ार है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction"
				},
				{
					"content": {
						"korean": "기억을 사고 싶어? 아니면… 잊고 싶은 건가?",
						"english": "Do you want to buy memories? Or... do you want to forget?",
						"japanese": "記憶を買いたいのか？それとも…忘れたいのか？",
						"chinese": "想买记忆吗？还是……想遗忘什么？",
						"french": "Tu veux acheter des souvenirs ? Ou... tu veux oublier ?",
						"spanish": "¿Quieres comprar recuerdos? ¿O... quieres olvidar?",
						"vietnamese": "Muốn mua ký ức sao? Hay... muốn quên đi điều gì đó?",
						"thai": "อยากซื้อความทรงจำหรือเปล่า? หรือว่า...อยากจะลืมอะไรไป",
						"hindi": "क्या तुम यादें खरीदना चाहते हो? या... भूलना चाहते हो?"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你在说什么？",
						"french": "De quoi tu parles ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Anh nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 '환각 향신료'는 잊고 싶은 걸 잊게 해주지. 물론… 기억할 것도 같이 지워버리지만.",
						"english": "This 'hallucinogenic spice' lets you forget what you want to forget. Of course... it erases what you should remember too.",
						"japanese": "この『幻覚香辛料』は、忘れたいことを忘れさせてくれる。もちろん…覚えているべきことも一緒に消してしまうがね。",
						"chinese": "这种‘致幻香料’能让你忘掉想忘的事。当然……它也会把该记住的一起抹去。",
						"french": "Cette 'épice hallucinogène' te permet d'oublier ce que tu veux oublier. Bien sûr... elle efface aussi ce que tu devrais te souvenir.",
						"spanish": "Esta 'especia alucinógena' te permite olvidar lo que quieres. Claro... también borra lo que deberías recordar.",
						"vietnamese": "Loại 'gia vị ảo giác' này sẽ giúp anh quên đi những điều anh muốn. Tất nhiên... nó cũng xóa đi cả những gì anh nên nhớ.",
						"thai": " 'เครื่องเทศหลอนประสาท' นี้จะทำให้คุณลืมสิ่งที่อยากลืม แน่นอนว่า... มันจะลบสิ่งที่ควรจำไปด้วย",
						"hindi": "यह 'मतिभ्रम मसाला' तुम्हें वह सब भुला देगा जो तुम भूलना चाहते हो। बेशक... यह उन चीज़ों को भी मिटा देता है जिन्हें तुम्हें याद रखना चाहिए।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "환각은 달콤해. 하지만 그 대가는… 현실을 잃는 거야.",
						"english": "Hallucinations are sweet. But the price... is losing reality.",
						"japanese": "幻覚は甘い。だがその代償は…現実を失うことだ。",
						"chinese": "幻觉是甜蜜的。但代价是……失去现实。",
						"french": "Les hallucinations sont douces. But the price... is losing reality.",
						"spanish": "Las alucinaciones son dulces. Pero el precio... es perder la realidad.",
						"vietnamese": "Ảo giác thật ngọt ngào. Nhưng cái giá... là mất đi thực tại.",
						"thai": "ภาพหลอนนั้นหอมหวาน แต่สิ่งแลกเปลี่ยนคือ... การสูญเสียความจริงไป",
						"hindi": "मतिभ्रम मीठे होते हैं। लेकिन इसकी कीमत... वास्तविकता खो देना है।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기억을 지운다고… 그럼 누가 만든 거야?",
						"english": "Erasing memories... then who made it?",
						"japanese": "記憶を消すって… じゃあ誰が作ったんだ？",
						"chinese": "消除记忆... 那是谁做的？",
						"french": "Effacer les souvenirs... Alors qui l'a fait ?",
						"spanish": "Borrar los recuerdos... ¿Entonces quién lo hizo?",
						"vietnamese": "Xóa ký ức... Vậy ai đã tạo ra nó?",
						"thai": "ลบความทรงจำ... แล้วใครสร้างมันขึ้นมา?",
						"hindi": "यादें मिटाना... तो इसे किसने बनाया?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "소문에… 과거 궁정 요리사가 만들었대. 사라진 왕궁의 요리사 사하르.",
						"english": "Rumor has it... a former royal chef made it. Sahar, the chef of the lost palace.",
						"japanese": "噂では… 昔の宮廷料理人が作ったと。消えた王宮の料理人、サハルが。",
						"chinese": "据说... 是过去的宫廷厨师做的。失踪王宫的厨师，萨哈尔。",
						"french": "La rumeur dit... qu'un ancien chef royal l'a créé. Sahar, le chef du palais disparu.",
						"spanish": "Se rumorea... que un antiguo chef real lo hizo. Sahar, el cocinero del palacio perdido.",
						"vietnamese": "Nghe đồn... một đầu bếp hoàng gia cũ đã làm ra. Sahar, đầu bếp của cung điện đã mất.",
						"thai": "มีข่าวลือว่า... เชฟหลวงในอดีตสร้างมันขึ้นมา ซาฮาร์ เชฟของวังที่หายสาบสูญไป",
						"hindi": "अफवाह है... कि एक पूर्व शाही रसोइए ने इसे बनाया था। खोए हुए महल का रसोइया, सहार।"
					},
					"speaker": "ember",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사라진 요리사… 그럼 그 기록이랑 연결된 건가?",
						"english": "The lost chef... Is it connected to that record, then?",
						"japanese": "消えた料理人… それならその記録と繋がってるのか？",
						"chinese": "失踪的厨师... 那和那份记录有关吗？",
						"french": "Le chef disparu... Est-ce lié à ce document, alors ?",
						"spanish": "El chef perdido... ¿Entonces está conectado a ese registro?",
						"vietnamese": "Đầu bếp đã mất... Vậy nó có liên quan đến ghi chép đó không?",
						"thai": "เชฟที่หายสาบสูญไป... แล้วมันเกี่ยวข้องกับบันทึกนั้นหรือเปล่า?",
						"hindi": "खोया हुआ रसोइया... तो क्या यह उस रिकॉर्ड से जुड़ा है?"
					}
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "달콤한 환상은… 그를 미치게 했지.",
						"english": "Sweet illusions... drove him mad.",
						"japanese": "甘い幻想は… 彼を狂わせた。",
						"chinese": "甜蜜的幻象... 让他发疯了。",
						"french": "Les douces illusions... l'ont rendu fou.",
						"spanish": "Las dulces ilusiones... lo volvieron loco.",
						"vietnamese": "Những ảo ảnh ngọt ngào... đã khiến anh ta phát điên.",
						"thai": "ภาพลวงตาอันหอมหวาน... ทำให้เขาคลุ้มคลั่งไป",
						"hindi": "मीठे भ्रमों ने... उसे पागल कर दिया।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "환각 향신료는 현실의 고통을 지워줘. 하지만 그건 거짓된 평화일 뿐.",
						"english": "Hallucinogenic spices erase the pain of reality. But it's just a false peace.",
						"japanese": "幻覚スパイスは現実の苦痛を消してくれる。だが、それは偽りの平和に過ぎない。",
						"chinese": "致幻香料能抹去现实的痛苦。但这只是虚假的平静。",
						"french": "Les épices hallucinogènes effacent la douleur de la réalité. Mais ce n'est qu'une fausse paix.",
						"spanish": "Las especias alucinógenas borran el dolor de la realidad. Pero es solo una falsa paz.",
						"vietnamese": "Gia vị ảo giác xóa tan nỗi đau thực tại. Nhưng đó chỉ là một sự bình yên giả tạo.",
						"thai": "เครื่องเทศหลอนประสาทลบความเจ็บปวดจากความเป็นจริง แต่เป็นเพียงสันติภาพจอมปลอม",
						"hindi": "मतिभ्रम वाले मसाले वास्तविकता के दर्द को मिटा देते हैं। लेकिन यह सिर्फ एक झूठी शांति है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모든 고통을 잊는다고… 그 뒤엔 뭐가 남아?",
						"english": "Forgetting all pain... what's left after that?",
						"japanese": "全ての苦痛を忘れるって… その後に何が残る？",
						"chinese": "忘记所有痛苦... 那之后还剩下什么？",
						"french": "Oublier toute douleur... que reste-t-il après ça ?",
						"spanish": "Olvidar todo dolor... ¿Qué queda después de eso?",
						"vietnamese": "Quên hết mọi nỗi đau... Sau đó còn lại gì?",
						"thai": "ลืมความเจ็บปวดทั้งหมด... แล้วอะไรจะเหลืออยู่?",
						"hindi": "सारा दर्द भूल जाना... उसके बाद क्या बचता है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…텅 빈 공허. 아무것도 없는 허상.",
						"english": "...Empty void. A baseless illusion.",
						"japanese": "…空虚な空間。何もない虚像。",
						"chinese": "...空虚的虚无。一无所有的幻象。",
						"french": "...Un vide béant. Une illusion sans substance.",
						"spanish": "...Vacío total. Una ilusión sin nada.",
						"vietnamese": "...Khoảng không trống rỗng. Một ảo ảnh không có gì.",
						"thai": "...ความว่างเปล่า ภาพลวงตาที่ไม่มีอะไรเลย",
						"hindi": "...खाली शून्य। एक आधारहीन भ्रम।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "결국 현실을 외면하는 거네.",
						"english": "Ultimately, it's turning away from reality.",
						"japanese": "結局、現実から目を背けるってことか。",
						"chinese": "归根结底，是逃避现实。",
						"french": "En fin de compte, c'est fuir la réalité.",
						"spanish": "Al final, es ignorar la realidad.",
						"vietnamese": "Cuối cùng, là quay lưng lại với thực tại.",
						"thai": "สุดท้ายแล้ว ก็คือการหลีกหนีจากความเป็นจริง",
						"hindi": "आखिरकार, यह वास्तविकता से मुंह मोड़ना ही है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이곳 사람들은 그걸 택했지. 고통스러운 현실보다는… 달콤한 망각을.",
						"english": "The people here chose that. Sweet oblivion... over painful reality.",
						"japanese": "ここの人々はそれを選んだ。苦痛な現実よりも… 甘い忘却を。",
						"chinese": "这里的人选择了它。宁愿选择甜蜜的遗忘... 而非痛苦的现实。",
						"french": "Les gens d'ici ont choisi cela. Le doux oubli... plutôt que la douloureuse réalité.",
						"spanish": "La gente de aquí eligió eso. El dulce olvido... antes que la dolorosa realidad.",
						"vietnamese": "Người ở đây đã chọn điều đó. Sự lãng quên ngọt ngào... hơn là thực tại đau khổ.",
						"thai": "คนที่นี่เลือกสิ่งนั้น การลืมเลือนที่หอมหวาน... ดีกว่าความเป็นจริงที่เจ็บปวด",
						"hindi": "यहां के लोगों ने वही चुना। दर्दनाक वास्तविकता से ज्यादा... मीठी विस्मृति को।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ember",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 깊이 갈 생각이야? 돌아올 수 없을지도 몰라.",
						"english": "Are you thinking of going deeper? You might not be able to return.",
						"japanese": "もっと深く行くつもり？ 戻ってこれないかもしれないよ。",
						"chinese": "你还想走更深吗？也许就回不来了。",
						"french": "Tu comptes aller plus loin ? Tu pourrais ne pas pouvoir revenir.",
						"spanish": "Piensas ir más profundo? Puede que no puedas volver.",
						"vietnamese": "Bạn định đi sâu hơn sao? Có thể sẽ không quay lại được đâu.",
						"thai": "คิดจะไปให้ลึกกว่านี้เหรอ? อาจจะกลับมาไม่ได้นะ",
						"hindi": "क्या तुम और गहराई में जाने की सोच रहे हो? हो सकता है तुम वापस न आ पाओ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 이 환상의 실체를 봐야 해.",
						"english": "Can't stop now. Must see the true nature of this illusion.",
						"japanese": "止められない。この幻想の正体を見なければ。",
						"chinese": "无法停止。必须看到这幻象的真相。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la véritable nature de cette illusion.",
						"spanish": "No puedo parar. Debo ver la verdadera naturaleza de esta ilusión.",
						"vietnamese": "Không thể dừng lại. Phải thấy được thực thể của ảo ảnh này.",
						"thai": "หยุดไม่ได้แล้ว ต้องเห็นความจริงของภาพลวงตานี้",
						"hindi": "रुक नहीं सकता। इस भ्रम की वास्तविकता देखनी होगी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "후회하지 마. 진실은… 언제나 씁쓸한 법이니까.",
						"english": "Don't regret it. The truth... is always bitter.",
						"japanese": "後悔するな。真実は…いつだって苦いものだから。",
						"chinese": "别后悔。真相…总是苦涩的。",
						"french": "Ne le regrette pas. La vérité… est toujours amère.",
						"spanish": "No te arrepientas. La verdad… siempre es amarga.",
						"vietnamese": "Đừng hối hận. Sự thật… luôn đắng chát.",
						"thai": "อย่าเสียใจเลย ความจริง… มักจะขมขื่นเสมอ",
						"hindi": "पछताओ मत। सच… हमेशा कड़वा होता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "향신료 냄새가 짙어진다. 환상의 연회가 시작되는 곳.",
						"english": "The scent of spices deepens. This is where the illusory feast begins.",
						"japanese": "スパイスの香りが濃くなる。幻想の宴が始まる場所だ。",
						"chinese": "香料的气味变浓了。幻象的盛宴由此开始。",
						"french": "L'odeur des épices s'intensifie. C'est ici que commence le festin illusoire.",
						"spanish": "El aroma a especias se intensifica. Aquí es donde comienza el festín ilusorio.",
						"vietnamese": "Mùi gia vị nồng hơn. Nơi bữa tiệc ảo ảnh bắt đầu.",
						"thai": "กลิ่นเครื่องเทศเข้มข้นขึ้น ที่นี่คือที่ที่งานเลี้ยงแห่งภาพลวงตาเริ่มต้น",
						"hindi": "मसालों की गंध तेज हो रही है। यहीं से भ्रम का भोज शुरू होता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기까지 온 건가. 기억을 잃고 싶지 않은 자들이여.",
						"english": "You've come this far, have you? Those who don't wish to lose their memories.",
						"japanese": "ここまで来たか。記憶を失いたくない者たちよ。",
						"chinese": "你们走到这里了吗？那些不愿失去记忆的人们。",
						"french": "Vous êtes venus jusqu'ici, n'est-ce pas ? Ceux qui ne veulent pas perdre leurs souvenirs.",
						"spanish": "¿Han llegado hasta aquí? Aquellos que no quieren perder sus recuerdos.",
						"vietnamese": "Các ngươi đã đến tận đây sao? Những kẻ không muốn đánh mất ký ức.",
						"thai": "มาถึงนี่แล้วรึ? ผู้ที่ไม่ต้องการสูญเสียความทรงจำ",
						"hindi": "तुम इतनी दूर आ गए हो? वे लोग जो अपनी यादें खोना नहीं चाहते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 환상을 만들었군.",
						"english": "So you created all these illusions.",
						"japanese": "お前がこの全ての幻想を作ったのか。",
						"chinese": "原来你制造了所有这些幻象。",
						"french": "C'est toi qui as créé toutes ces illusions.",
						"spanish": "Así que tú creaste todas estas ilusiones.",
						"vietnamese": "Ngươi đã tạo ra tất cả những ảo ảnh này.",
						"thai": "เธอนี่เองที่สร้างภาพลวงตาเหล่านี้ทั้งหมด",
						"hindi": "तो तुमने ये सारे भ्रम बनाए हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통 없는 세상을 선사할 뿐.",
						"english": "I merely offer a world without pain.",
						"japanese": "ただ、苦痛のない世界を与えるだけだ。",
						"chinese": "我只是带来一个没有痛苦的世界。",
						"french": "Je n'offre qu'un monde sans douleur.",
						"spanish": "Solo ofrezco un mundo sin dolor.",
						"vietnamese": "Chỉ đơn thuần ban tặng một thế giới không đau khổ.",
						"thai": "แค่เพียงมอบโลกที่ไร้ความเจ็บปวดเท่านั้น",
						"hindi": "मैं बस एक दर्द रहित दुनिया दे रहा हूँ।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 고통은… 아직 시작도 안 했어.",
						"english": "...Is this all? The real pain... hasn't even begun.",
						"japanese": "…たったこれだけか。本当の苦痛は…まだ始まってもいない。",
						"chinese": "…就这点程度吗？真正的痛苦…还没开始呢。",
						"french": "…Ce n'est que ça ? La vraie douleur… n'a même pas encore commencé.",
						"spanish": "¿...Esto es todo? El verdadero dolor... aún no ha comenzado.",
						"vietnamese": "...Chỉ đến mức này thôi sao. Nỗi đau thực sự… còn chưa bắt đầu.",
						"thai": "...แค่นี้เองเหรอ? ความเจ็บปวดที่แท้จริง... ยังไม่เริ่มต้นด้วยซ้ำ",
						"hindi": "...बस इतना ही? असली दर्द... अभी शुरू भी नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy.",
						"thai": "หมายความว่ายังไง",
						"hindi": "तुम्हारा क्या मतलब है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자. 그러나 환상은 사라지지 않았다. 더 깊은 곳으로 이끄는… 미친 요리사의 초대장.",
						"english": "The shadow falls. Yet the illusion remains. An invitation from the Mad Chef… leading to deeper realms.",
						"japanese": "倒れた影。しかし幻想は消えなかった。さらに奥へと誘う…狂った料理人の招待状。",
						"chinese": "影子倒下了。然而幻象并未消失。一张引向更深处的…疯狂厨师的邀请函。",
						"french": "L'ombre tombe. Pourtant l'illusion demeure. Une invitation du Chef Fou… menant vers des lieux plus profonds.",
						"spanish": "La sombra cae. Sin embargo, la ilusión permanece. Una invitación del Chef Loco… que conduce a reinos más profundos.",
						"vietnamese": "Bóng tối ngã xuống. Nhưng ảo ảnh không biến mất. Lời mời từ Đầu Bếp Điên… dẫn lối đến những nơi sâu thẳm hơn.",
						"thai": "เงาที่ล้มลง แต่ภาพลวงตายังคงอยู่ คำเชิญจากเชฟบ้าคลั่ง… ที่นำพาไปสู่ที่ลึกยิ่งกว่า",
						"hindi": "छाया गिर जाती है। फिर भी भ्रम बना रहता है। मैड शेफ का एक निमंत्रण… जो गहरे स्थानों की ओर ले जाता है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항. 결국 너희도 고통을 잊게 될 거야.",
						"english": "Futile resistance. Eventually, you too will forget your pain.",
						"japanese": "取るに足らない抵抗。結局お前たちも苦痛を忘れるだろう。",
						"chinese": "微不足道的抵抗。最终，你们也会忘记痛苦。",
						"french": "Résistance futile. Finalement, vous aussi oublierez votre douleur.",
						"spanish": "Resistencia inútil. Al final, vosotros también olvidaréis vuestro dolor.",
						"vietnamese": "Sự kháng cự hèn mọn. Cuối cùng, các ngươi cũng sẽ quên đi nỗi đau.",
						"thai": "การต่อต้านที่ไร้ค่า ในที่สุดพวกเจ้าก็จะลืมความเจ็บปวดไปเช่นกัน",
						"hindi": "व्यर्थ प्रतिरोध। आखिरकार, तुम भी अपना दर्द भूल जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…절대 잊지 않아.",
						"english": "...I will never forget this.",
						"japanese": "...絶対に忘れない。",
						"chinese": "...我绝不会忘记。",
						"french": "...Je n'oublierai jamais.",
						"spanish": "...Nunca lo olvidaré.",
						"vietnamese": "...Sẽ không bao giờ quên.",
						"thai": "...จะไม่มีวันลืม.",
						"hindi": "...मैं कभी नहीं भूलूंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 한가운데, 잊힌 시장.",
			"기억을 지우는 환각 향신료.",
			"그리고 떠도는 궁정 요리사의 섬뜩한 풍문.",
			"진실은 언제나 환상 뒤에 숨어있었다."
		],
		"english": [
			"Amidst the desert, a forgotten market.",
			"Hallucinogenic spices that erase memories.",
			"And chilling rumors of a wandering court chef.",
			"Truth always hid behind illusion."
		],
		"japanese": [
			"砂漠の真ん中、忘れ去られた市場。",
			"記憶を消す幻覚の香辛料。",
			"そして、さまよう宮廷料理人の不気味な噂。",
			"真実は常に幻想の裏に隠されていた。"
		],
		"chinese": [
			"沙漠之中，被遗忘的市集。",
			"抹去记忆的致幻香料。",
			"以及流传着宫廷厨师的诡异传闻。",
			"真相，总是隐藏在幻象之后。"
		],
		"french": [
			"Au milieu du désert, un marché oublié.",
			"Des épices hallucinogènes qui effacent les souvenirs.",
			"Et de sinistres rumeurs sur un cuisinier de cour errant.",
			"La vérité s'est toujours cachée derrière l'illusion."
		],
		"spanish": [
			"En medio del desierto, un mercado olvidado.",
			"Especias alucinógenas que borran recuerdos.",
			"Y espeluznantes rumores de un chef de la corte errante.",
			"La verdad siempre se ocultó tras la ilusión."
		],
		"vietnamese": [
			"Giữa sa mạc, một khu chợ bị lãng quên.",
			"Gia vị ảo giác xóa nhòa ký ức.",
			"Và tin đồn rùng rợn về một đầu bếp cung đình lang thang.",
			"Sự thật luôn ẩn giấu sau ảo ảnh."
		],
		"thai": [
			"กลางทะเลทราย ตลาดที่ถูกลืมเลือน",
			"เครื่องเทศหลอนประสาทที่ลบความทรงจำ",
			"และข่าวลือชวนขนหัวลุกของเชฟหลวงผู้ร่อนเร่",
			"ความจริงซ่อนอยู่เบื้องหลังภาพลวงตาเสมอ"
		],
		"hindi": [
			"रेगिस्तान के बीचों-बीच, एक भूला हुआ बाज़ार।",
			"स्मृति मिटाने वाले मतिभ्रम मसाले।",
			"और भटकते हुए शाही रसोइए की खौफनाक अफवाहें।",
			"सच्चाई हमेशा भ्रम के पीछे छिपी रहती थी।"
		]
	}
} as const;
